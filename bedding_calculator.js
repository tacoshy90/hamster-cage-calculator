/* ----- ----- ----- START: License ----- ----- -----
MIT License

Copyright (c)2022 Nathee Magner (tacoshy)

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND; EXPRESS OR 
IMPLIED; INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
----- ----- ----- END: License ----- ----- ----- */

/* condition ready check indentifier */
window.addEventListener('load', function() {
    condition_ready.bedding_calculator = 'bedding_calculator.js file is ready';
});

document.querySelectorAll('.eventListener').forEach(inputListener => {
    inputListener.addEventListener('change', function() {
        //correct inputs if invalid values have been entered
        let active_input = ['#input-cage-width', '#input-cage-depth', '#input-bedding-data-height'];
        for (let i = 0; i < active_input.length; i++) {
            let value_input = +document.querySelector(active_input[i]).value,
                min_input = +document.querySelector(active_input[i]).min,
                max_input = +document.querySelector(active_input[i]).max,
                ele = document.querySelector(active_input[i]);
            if (value_input < min_input) {
                element.value = min_input;
            };     
            if (value_input > max_input) {
                ele.value = max_input;
            };
        }
        calculations();
    });
});   

var standard_target = 100;


function calculations() {
    //variables for core values
    let width = document.querySelector('#input-cage-width').value,
        depth = document.querySelector('#input-cage-depth').value,
        height = document.querySelector('#input-bedding-data-height').value,
        compression_factor = 2;
    //variables for calulated values
    let surface_area_A = (width * depth),
        surface_area_B = surface_area_A / 10000;
        volume_loosely = (width / 10) * (depth / 10) * (height / 10);
    
    let DB_array_comparison = {
        DE: {
            X: 100,
            Y: 50
        },
        HSUS: {
            X: 90,
            Y: 41.29
        },
        ASPCA: {
            X: 50,
            Y: 25.8
        }
    };

    let aspect_ratio_container = `${DB_localization.default_attr[0][2].max} / ${DB_localization.default_attr[1][2].max}`,
        comparison_width_de = `${(DB_array_comparison.DE.X / DB_localization.default_attr[0][2].max) * 100}%`,
        comparison_height_de = `${(DB_array_comparison.DE.Y / DB_localization.default_attr[1][2].max) * 100}%`,
        comparison_width_hsus = `${(DB_array_comparison.HSUS.X / DB_localization.default_attr[0][2].max) * 100}%`,
        comparison_height_hsus = `${(DB_array_comparison.HSUS.Y / DB_localization.default_attr[1][2].max) * 100}%`,
        comparison_width_aspca = `${(DB_array_comparison.ASPCA.X / DB_localization.default_attr[0][2].max) * 100}%`,
        comparison_height_aspca = `${(DB_array_comparison.ASPCA.Y / DB_localization.default_attr[1][2].max) * 100}%`,
        comparison_width_user = `${(width / DB_localization.default_attr[0][2].max) * 100}%`,
        comparison_height_user = `${(depth / DB_localization.default_attr[1][2].max) * 100}%`;

    //retrieve mass from selected element and calculate the weight
    let selectIndex = document.getElementById('input-bedding-type').selectedIndex,
        mass = DB_bedding[selectIndex].mass[language],
        weight_loosely = (volume_loosely * mass).toFixed(2);
    let weight_compressed = '',
        volume_compressed = '';
    if (DB_bedding[selectIndex].compressable === true) {
        weight_compressed = (weight_loosely * compression_factor).toFixed(2);
        volume_compressed = (volume_loosely * compression_factor).toFixed(2);
    } else {
        weight_compressed = DB_localization.output_messages[0][language]; 
        volume_compressed = DB_localization.output_messages[0][language];   
    }  


    //output
    document.querySelector('#input-cage-surface-area').value = surface_area_B.toFixed(2);
    document.querySelector('#output-comparison-cage').value =  surface_area_B.toFixed(2);
    document.querySelector('#output-volume-loosely').value = volume_loosely.toFixed(2);
    document.querySelector('#output-volume-compressed').value = volume_compressed;
    document.querySelector('#output-visual-comparison').style.aspectRatio = aspect_ratio_container;
    document.querySelector('#output-visual-comparison-de').style.width = comparison_width_de;
    document.querySelector('#output-visual-comparison-de').style.height = comparison_height_de;
    document.querySelector('#output-visual-comparison-hsus').style.width = comparison_width_hsus;
    document.querySelector('#output-visual-comparison-hsus').style.height = comparison_height_hsus;
    document.querySelector('#output-visual-comparison-aspca').style.width = comparison_width_aspca;
    document.querySelector('#output-visual-comparison-aspca').style.height = comparison_height_aspca;
    document.querySelector('#output-visual-comparison-user').style.width = comparison_width_user;
    document.querySelector('#output-visual-comparison-user').style.height = comparison_height_user;
    document.querySelector('#output-weight-loosely').value = weight_loosely;
    document.querySelector('#output-weight-compressed').value = weight_compressed;

    //compare size of the user cage with the standard
    if (language == 'us') {
        standard_target = ((surface_area_A / (DB_localization.content[25][2].val * 10000)) * 100).toFixed(0);
    } else {
        standard_target = ((surface_area_A / (DB_localization.content[24][2].val * 10000)) * 100).toFixed(0);
    }
    document.querySelector('#standard-target').textContent = '';
    document.querySelector('#standard-target').insertAdjacentHTML('afterbegin', `${DB_localization.output_messages[1][language]}<b>${standard_target}%</b>.`);
};
