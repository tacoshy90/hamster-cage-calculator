/* condition ready check indentifier */
window.addEventListener('load', function() {
    condition_ready.localization = 'localization.js file is ready';
});

/* ----- ----- ----- Start: Description ----- ----- -----

This script is used to dynamically generate content with a specified language.

----- ----- ----- END: Description ----- ----- ----- */


function initialize_localization() {
    /* get the correct language */
    switch (language) {
        case 'us': case 'en-us':
            language = 'us';
            break;
        case 'en-gb':
            language = 'en';
            break;
        default:
            var lang_check = allowed_lang.includes(language);
            if (lang_check === true) {
                //console log report
                if (activate_console === true) {
                    console.log(checkpoint[3]);
                }
            //error correction and repair if language is not supported
            } else {
                //console log report
                if (activate_console === true) {
                    console.log(error[2]);
                }
                //alert report
                if (activate_alert === true) {
                    alert(error[2]);
                }
                //set a default existing language
                language = 'de';
            }
            break;
    }

    /* loading unique elements */
    for (let i = 0; i < DB_localization.content.length; i++) {
        let DB_array_element = document.querySelector(DB_localization.content[i][1]),
            DB_array_value = DB_localization.content[i][2][language];
        if (typeof DB_array_element !== 'undefined' && //condition to check if database entry exist
            typeof DB_array_value !== 'undefined') { //condition to check if database entry exist
                DB_array_element.textContent = '';
                DB_array_element.insertAdjacentHTML('beforeend', DB_array_value);                                   
                array_path = DB_localization.content[i][0]; 
                checkpoint.splice(4, 4, `the database entry "${array_path}" has been found and applied`);
                //console log report
                if (activate_console === true) {
                    console.log(checkpoint[4]);
                } 
        } else {
            //console log report
            if (activate_console === true) { 
                console.log(error[4]); 
            }
            //alert report
            if (activate_alert === true) {
                alert(error[4]);
            }
        }

        //run next process
        if (i + 1 === DB_localization.content.length) {
            load_measurement_units();
        }
    }   
};

function load_measurement_units() {
    /* applying the correct measurement units */
    for (let i = 0; i < DB_localization.measurement_units.length; i++) {
        let DB_array_element = document.querySelectorAll(DB_localization.measurement_units[i][1]),
            DB_array_value = DB_localization.measurement_units[i][2][language];
        if (typeof DB_array_value !== 'undefined' && //condition to check if database entry exist
            typeof DB_array_element !== 'undefined') { //condition to check if database entry exist
                DB_array_element.textContent = '';
                DB_array_element.forEach(el => el.insertAdjacentHTML('beforeend', DB_array_value));
                array_path = DB_localization.measurement_units[i][0];
                //update checkpoint message variable
                checkpoint.splice(4, 4, `the database entry "${array_path}" has been found and applied`);
                //console log report
                if (activate_console === true) {
                    console.log(checkpoint[4]);
                }
        } else {
            //console log report
            if (activate_console === true) {
                console.log(error[4]);
            }
            // alert report
            if (activate_alert === true) {
                alert(error[4]);
            }
        }

        //run next process
        if (i + 1 === DB_localization.measurement_units.length) {
            load_bedding_DB();
        }
    }
}

function load_bedding_DB() {
    /* loading the bedding information to select */
    for (let i = 0; i < DB_bedding.length; i++) {
        let DB_array_name = DB_bedding[i].name[language],
            DB_array_mass = DB_bedding[i].mass[language],
            DB_array_unit = DB_bedding[i].unit[language],
            DB_array_compressable = DB_bedding[i].compressable,
            DB_array_value = DB_bedding[i].value;
        let select = document.querySelector('#input-bedding-type');
        //condition to check if database entry exist
        if (typeof DB_array_name !== 'undefined' && 
            typeof DB_array_mass !== 'undefined' &&
            typeof DB_array_unit !== 'undefined' &&
            typeof DB_array_compressable !== 'undefined' &&
            typeof DB_array_value !== 'undefined') { 
                let new_ele = document.createElement('option');
                new_ele.value = DB_array_value;
                new_ele.insertAdjacentHTML('beforeend', DB_array_name);
                switch (i) {
                    case 0:
                        new_ele.classList.add('d-none');
                        break;
                    case 1:
                        new_ele.setAttribute('selected', 'selected');
                        break;
                    default:
                        break;
                }
                select.appendChild(new_ele);
                //update checkpoint message variable
                checkpoint.splice(5, 5, `the database entry has been found and the <option> element for "${DB_array_name}" has been created`);
                //console log report
                if (activate_console === true) {
                    console.log(checkpoint[5]);
                }
        } else {
            //console log report
            if (activate_console === true) {
                console.log(error[4]);
            }
            // alert report
            if (activate_alert === true) {
                alert(error[4]);
            }
        }

        //run next process
        if (i + 1 === DB_localization.measurement_units.length) {
            console.log('end of process')
        }
    }
}

