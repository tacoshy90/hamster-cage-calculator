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

/* ----- ----- ----- Start: Description ----- ----- -----

This script will initialize the program. It will load and include the correct 
language and measurement units of a country. This script also includes monitoring 
functions as well as providing debugging and error informations. 

----- ----- ----- END: Description ----- ----- ----- */


/* settings for console and error alerts */
var activate_console = true,
      activate_alert = true;

/* core variables */
var language = document.documentElement.lang.toLowerCase();
var checkpoint_update = 'error';
var array_path = 'undefined';
var allowed_lang = ['de', 'us', 'en'];

/* error message */
var error = ['ERROR 00: undefined',
             'ERROR 01: the checkpoint failed to pass',
             `ERROR 02: localization file for "${language.toUpperCase()}" has not been found. Loading "DE" language`,
             'ERROR 03: a crucial dependency file could not beeeUndefined',
             'ERROR 04: the database entry could not be accessed or has not been found',
             'ERROR 05: undefined',
             'ERROR 06: undefined',
             'ERROR 07: undefined',
             'ERROR 08: undefined',
             'ERROR 09: undefined',
             'ERROR 10: undefined',
             'ERROR 11: undefined',
             'ERROR 12: undefined',
             'ERROR 13: undefined',
             'ERROR 14: undefined',
             'ERROR 15: undefined',
             'ERROR 16: undefined',
             'ERROR 17: undefined',
             'ERROR 18: undefined',
             'ERROR 19: undefined',
             'ERROR 20: undefined'];

/* checkpoint messages */
var checkpoint = ['the initialization checkpoint has been reached',
                  'the initialization checkpoint has successfully passed',
                  'initializing localization process',
                  `localization file for "${language.toUpperCase()}" has been found`,
                  `the database entry "${array_path}" has been found and applied`,
                  `the database entry has been found and the <option> element has been created`];
function update_checkpoint() {
    checkpoint.splice(0, 0, `the ${checkpoint_update} checkpoint has been reached`);
    checkpoint.splice(0, 0, `the ${checkpoint_update} checkpoint has successfully passed`);
}

/* list of file dependencies */
var crucial_dependencies = ['bedding_calculator', 'bedding_database', 'localization', 'localization_database'],
    secondary_dependencies = ['local_storage'];

/* condition ready check variables */
var condition_ready = {bedding_calculator: 'bedding_calculator.js file has not been found',
                       bedding_database: 'bedding_database.js file has not been found',
                       localization: 'localization.js file has not been found',
                       local_storage: 'local_storage.js file has not been found'};
     

window.addEventListener('DOMContentLoaded', function() {

    /* log for start of checkpoint */
    if (activate_console === true) {
        console.log(checkpoint[0]);
    }

    /* merge dependencies array */
    var array_dependencies = crucial_dependencies.concat(secondary_dependencies);

    if (activate_console === true) {
        console.log(`set language: ${language}`);
    }

    /* log for end of checkpoint */
    if (activate_console === true) {
        console.log(checkpoint[1]);
    }

    /* update chckpoint information */
    checkpoint_update = 'creating dependency';
    update_checkpoint();

    /* log for start of checkpoint */
    if (activate_console === true) {
        console.log(checkpoint[0]);
    }

    /* adding dependencies to the DOM */
    var log_array = [];
    for (let i = 0; i < array_dependencies.length; i++) {
        let url = array_dependencies[i] + '.js',
            tag = document.createElement('script');
        tag.setAttribute('src', url);
        document.head.appendChild(tag);
        if (activate_console === true) {
            console.log(`element: <script src="${url}"></script> has been created`);
        }
        log_array.push(`condition_ready_${array_dependencies[i]}`);
    }

    /* log for end of checkpoint */
    if (activate_console === true) {
        console.log(checkpoint[1]);
    }

    /* update chckpoint information */
    checkpoint_update = 'checking dependency';
    update_checkpoint();

    /* log for start of checkpoint */
    if (activate_console === true) {
        console.log(checkpoint[0]);
    }
    
    setTimeout(function() {
        /* checking for available and parsed dependencies */
        for (const key in condition_ready) {
            if (activate_console === true) {
                console.log(condition_ready[key]);
            }
        }

        if (activate_console === true) {
            console.log(checkpoint[1]);
        }
    
        /* update chckpoint information */
        checkpoint_update = 'localization';
        update_checkpoint();
    
        /* log for start of checkpoint */
        if (activate_console === true) {
            console.log(checkpoint[0]);
        }

        /* initialize localization process */
        if (activate_console === true) {
            console.log(checkpoint[2]);
        }
        initialize_localization();
    }, 50);
});
