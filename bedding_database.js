/* condition ready check indentifier */
window.addEventListener('load', function() {
    condition_ready.bedding_database = 'bedding_database.js file is ready';
});

/* ----- ----- ----- Start: Description ----- ----- -----

This script is used as a database. It contains bedding product informations

----- ----- ----- END: Description ----- ----- ----- */

var DB_bedding = [
    //product 0
    {
        name: {
            de: 'Eigenes Einstreu',
            us: 'Custom',
            en: 'Custom'
        },
        mass: {
            de: 0.04,
            us: 0.36,
            en: 0.04
        },
        unit: {
            de: 'kg/l',
            us: 'lb/gal',
            en: 'kg/l'
        },
        compressable: true,
        value: 'bedding-type-custom'
    },

    //product 1
    {
        name: {
            de: 'Kleintier-Einstreu',
            us: 'Wooden litter',
            en: 'Wodden litter'
        },
        mass: {
            de: 0.0455,
            us: 0.362,
            en: 0.0455
        },
        unit: {
            de: 'kg/l',
            us: 'lb/gal',
            en: 'kg/l'
        },
        compressable: true,
        value: 'bedding-type-wodden-litter'
    },

    //product 2
    {
        name: {
            de: 'Hanf-Einstreu',
            us: 'Hemp litter',
            en: 'hemp litter'
        },
        mass: {
            de: 0.047,
            us: 0.3745,
            en: 0.047
        },
        unit: {
            de: 'kg/l',
            us: 'lb/gal',
            en: 'kg/l'
        },
        compressable: false,
        value: 'bedding-type-hemp-litter'   
    },    
    //product 3
    {
        name: {
            de: 'Allspan',
            us: 'Allspan',
            en: 'Allspan'
        },
        mass: {
            de: 0.043,
            us: 0.342,
            en: 0.043
        },
        unit: {
            de: 'kg/l',
            us: 'lb/gal',
            en: 'kg/l'
        },
        compressable: true,
        value: 'bedding-type-allspan'
    },

    //product 4
    {
        name: {
            de: 'Chinchillasand',
            us: 'Chinchillasand',
            en: 'Chinchillasand'
        },
        mass: {
            de: 0.73,
            us: 0.342,
            en: 5.814
        },
        unit: {
            de: 'kg/l',
            us: 'lb/gal',
            en: 'kg/l'
        },
        compressable: false,
        value: 'bedding-type-chinchillasand'
    } 
]






