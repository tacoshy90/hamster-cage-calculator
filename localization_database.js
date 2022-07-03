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
    condition_ready.localization_database = 'localization_database.js file is ready';
});

/* ----- ----- ----- Start: Description ----- ----- -----

This script is used as a database. It contains the informations for localization, 
such as text and measurment units.

----- ----- ----- END: Description ----- ----- ----- */


var DB_localization = {    
    content: [
        [
            //DB_localization.content[0]
            'DB_localization/content/title', //path for console log
            'title', //element for querySelector
            {
                de: 'Berechnungstool für Einstreumenge',
                us: 'Bedding Calculation Tool',
                en: 'Bedding Calculation Tool'    
            }
        ],
        [
            //DB_localization.content[1]
            'DB_localization/content/heading', //path for console log
            '#title', //element for querySelector
            {
                de: 'Artgerechte Hamstergehege',
                us: 'Hamster-Appropriate Cages',
                en: 'Hamster-Appropriate Cages'    
            }
        ],
        [
            //DB_localization.content[2]
            'DB_localization/content/text-block-1', //path for console log
            '#text-block-1', //element for querySelector
            {
                de: `Um einem artgerechten Hamstergehege gerecht zu werden, müssen wichtige und 
                     unumgängliche Punkte eingehalten werden. Diese Vorgaben sind wichtig, damit 
                     sich der Hamster möglichst wohl fühlt sowie ein - soweit das in der 
                     Heimtierhaltung möglich ist - artgerechtes Leben führen kann. Leider werden 
                     in Zoohandlungen oder Baumärkten oftmals kleine Gitterkäfige angeboten, 
                     welche nicht nur gefährlich sind, sondern auch die Bedürfnisse eines 
                     Hamsters keinesfalls stillen.`,
                us: 'not localized',
                en: 'not localized'
            }
        ],
        [
            //DB_localization.content[3]
            'DB_localization/content/text-block-2', //path for console log
            '#text-block-2', //element for querySelector
            {
                de: `In Deutschland gibt es noch keine Gesetze, die artgerechte Haltung 
                     vorschreiben. Dennoch gibt es Richtlinien, nach welchen auch einige 
                     Veterinärämter handeln.<br>
                     Die Tierärztliche Vereinigung für Tierschutz e.V. (TVT), das 
                     Bundesministerium für Ernährung und Landwirtschaft (BMEL) sowie der 
                     Sachkundenachweis für Kleinsäuger nach §11 Tierschutzgesetz, empfehlen ein 
                     Gehegemaß für alle Hamsterarten 
                     ab <span class="minimum-surface-area-A"></span><span class="unit-lenght"></span>.`,
                us: 'not localized',
                en: 'not localized'
            }
        ],
        [
            //DB_localization.content[4]
            'DB_localization/content/sub-title-1', //path for console log
            '#sub-title-1', //element for querySelector
            {
                de: `Das Mindestmaß in Deutschland für alle Hamsterarten:`,
                us: 'not localized',
                en: 'not localized'
            }
        ],
        [
            //DB_localization.content[5]
            'DB_localization/content/text-block-3', //path for console log
            '#text-block-3', //element for querySelector
            {
                de: `100x50<span class="unit-lenght"></span> <br>
                     oder <br>
                     ab 5000<span class="unit-surface-area-B"></span>`,
                us: 'not localized',
                en: 'not localized'
            }
        ],
        [
            //DB_localization.content[6]
            'DB_localization/content/sub-title-2', //path for console log
            '#sub-title-2', //element for querySelector
            {
                de: 'Trotzdem gilt: Wie größer, desto besser!',
                us: 'Nevertheless, "the more, the merrier" always applies!',
                en: 'Nevertheless, "the more, the merrier" always applies!'
            }
        ],
        [
            //DB_localization.content[7]
            'DB_localization/content/title-cage-data', //path for console log
            '#title-cage-data', //element for querySelector
            {
                de: 'Gehegedaten',
                us: 'Cage Informations',
                en: 'Cage Informations'
            }
        ],
        [
            //DB_localization.content[8]
            'DB_localization/content/title-bedding-data', //path for console log
            '#title-bedding-data', //element for querySelector
            {
                de: 'Einstreudaten',
                us: 'Litter Informations',
                en: 'Litter Informations'
            }
        ],
        [
            //DB_localization.content[9]
            'DB_localization/content/label-cage-width', //path for console log
            '#label-cage-width', //element for querySelector
            {
                de: 'Breite',
                us: 'Width',
                en: 'Width'
            }
        ],
        [
            //DB_localization.content[10]
            'DB_localization/content/label-cage-depth', //path for console log
            '#label-cage-depth', //element for querySelector
            {
                de: 'Tiefe',
                us: 'Depth',
                en: 'Depth'
            }
        ],
        [
            //DB_localization.content[11]
            'DB_localization/content/label-cage-surface-area', //path for console log
            '#label-cage-surface-area', //element for querySelector
            {
                de: 'Grundfläche',
                us: 'Surface Area',
                en: 'Surface Area'
            }
        ],
        [
            //DB_localization.content[12]
            'DB_localization/content/expert-mode-container>label', //path for console log
            '#expert-mode-container > label', //element for querySelector
            {
                de: 'Expertenmodus',
                us: 'Advanced Mode',
                en: 'Advanced Mode'
            }
        ],
        [
            //DB_localization.content[13]
            'DB_localization/content/title-data-volume', //path for console log
            '#title-data-volume', //element for querySelector
            {
                de: 'Volumen',
                us: 'Volume',
                en: 'Volume'
            }
        ],
        [
            //DB_localization.content[14]
            'DB_localization/content/output-volume-loosely', //path for console log
            '#label-output-volume-loosely', //element for querySelector
            {
                de: 'Lose:',
                us: 'Loosely scattered:',
                en: 'Loosely scattered:'
            }
        ],
        [
            //DB_localization.content[15]
            'DB_localization/content/label-output-volume-loosely', //path for console log
            '#label-output-volume-compressed', //element for querySelector
            {
                de: 'Gepresst:',
                us: 'Compressed:',
                en: 'Compressed:'
            }
        ],
        [
            //DB_localization.content[16]
            'DB_localization/content/title-data-weight', //path for console log
            '#title-data-weight', //element for querySelector
            {
                de: 'Gewicht',
                us: 'Weight',
                en: 'Weight'
            }
        ],
        [
            //DB_localization.content[17]
            'DB_localization/content/label-output-weight-loosely', //path for console log
            '#label-output-weight-loosely', //element for querySelector
            {
                de: 'Lose:',
                us: 'Loosely scattered:',
                en: 'Loosely scattered:'
            }
        ],
        [
            //DB_localization.content[18]
            'DB_localization/content/label-output-weight-compressed', //path for console log
            '#label-output-weight-compressed', //element for querySelector
            {
                de: 'Gepresst:',
                us: 'Compressed:',
                en: 'Compressed:'
            }
        ],
        [
            //DB_localization.content[19]
            'DB_localization/content/title-data-comparison-text', //path for console log
            '#title-data-comparison-text', //element for querySelector
            {
                de: 'Grundfläche',
                us: 'Surface Area',
                en: 'Surface Area'
            }
        ],
        [
            //DB_localization.content[20]
            'DB_localization/content/data-comparison-text', //path for console log
            '#data-comparison-text', //element for querySelector
            {
                de: `<p>Die Grundfläche ist die Fläche des Käfigbodens. Sie wird weder 
                     durch einen Auslauf noch durch Etagen vergrößert.</p>
                     <p>Die <span class="underline">minimale Grundfläche</span> nach 
                     <b>deutschem Standard</b> beträgt <b><span class="minimum-surface-area-B"></span><span class="unit-surface-area-A"></span></b>, 
                     was <span class="minimum-surface-area-DE"></span><span class="unit-surface-area-B"></span> entspricht.
                     <p>Der Standard in den USA wird von der The Humane Society of the United 
                     States (HSUS) mit <span class="minimum-surface-area-HSUS"></span><span class="unit-surface-area-A"></span> und 
                     der American Society for the Prevention of Cruelty to Animals (ASPCA) mit <span class="minimum-surface-area-ASPCA"></span><span class="unit-surface-area-A"></span> festgelegt.
                     <div class="info-box p-m"><b>Und bitte nie vergessen:</b> Mindestgröße bedeutet 
                     nur, das ist die unterste Toleranzgrenze - wenn möglich, sollte man 
                     die Tiere immer in größeren Gehegen halten!</div>`,
                us: `<p>The surface area is the bottom square size of your cage. A hamster spout or 
                     additional levels inside the cage do not expand the surface area.</p>
                     <p>The bare minimum floor space standard in the USA for hamster cages has been 
                     defined by the <b>"The Humane Society of the United States (HSUS)"</b> 
                     with <span class="minimum-surface-area-HSUS"></span><span class="unit-surface-area-A"></span> and the <b>"American Society for the Prevention of Cruelty 
                     to Animals (ASPCA)"</b> with <span class="minimum-surface-area-ASPCA"></span><span class="unit-surface-area-A"></span>.</p>
                     <p>Compared to the German standard of <span class="minimum-surface-area-DE"></span><span class="unit-surface-area-A"></span>, the American Standard 
                     has been defined as quite low.</p>
                     <div class="info-box p-m"><b>Remember</b> that a hamster will always 
                     be grateful to receive more than the bare minimum space.</div>`,
                en: `<p>The surface area is the bottom square size of your cage. A hamster spout or 
                    additional levels inside the cage do not expand the surface area.</p>
                    <p>The bare minimum floor space standard in the USA for hamster cages has been 
                    defined by the <b>"The Humane Society of the United States (HSUS)"</b> 
                    with <span class="minimum-surface-area-HSUS"></span><span class="unit-surface-area-A"></span> and the <b>"American Society for the Prevention of Cruelty 
                    to Animals (ASPCA)"</b> with <span class="minimum-surface-area-ASPCA"></span><span class="unit-surface-area-A"></span>.</p>
                    <p>Compared to the German standard of <span class="minimum-surface-area-B"></span><span class="unit-surface-area-A"></span>, the American Standard 
                    has been defined as quite low.</p>
                    <div class="info-box p-m"><b>Remember</b> that a hamster will always 
                    be grateful to receive more than the bare minimum space.</div>`
            }
        ],
        [
            //DB_localization.content[21]
            'DB_localization/content/title-data-comparison-legend', //path for console log
            '#title-data-comparison-legend', //element for querySelector
            {
                de: 'Deine Grundfläche',
                us: 'Your Surface Area',
                en: 'Your Surface Area'
            }
        ],
        [
            //DB_localization.content[22]
            'DB_localization/content/title-data-comparison-graph', //path for console log
            '#title-data-comparison-graph', //element for querySelector
            {
                de: 'Vergleich',
                us: 'Comparison',
                en: 'Comparison'
            }
        ],
        [
            //DB_localization.content[23]
            'DB_localization/content/label-comparison-cage', //path for console log
            '#label-comparison-cage', //element for querySelector
            {
                de: 'Dein Gehege',
                us: 'Your Cage',
                en: 'Your Cage'
            }
        ],
        [
            //DB_localization.content[24]
            'DB_localization/content/label-comparison-de', //path for console log
            '#label-comparison-de', //element for querySelector
            {
                de: 'Deutscher Standard',
                us: 'German Standard',
                en: 'German Standard',
                val: 0.5
            }
        ],
        [
            //DB_localization.content[25]
            'DB_localization/content/label-comparison-hsus', //path for console log
            '#label-comparison-hsus', //element for querySelector
            {
                de: 'HSUS Standard',
                us: 'HSUS Standard',
                en: 'HSUS Standard',
                val: 0.37
            }
        ],
        [
            //DB_localization.content[26]
            'DB_localization/content/label-comparison-aspca', //path for console log
            '#label-comparison-aspca', //element for querySelector
            {
                de: 'ASPCA Standard',
                us: 'ASPCA Standard',
                en: 'ASPCA Standard',
                val: 0.13
            }
        ],
        [
            //DB_localization.content[27]
            'DB_localization/content/label-bedding-data-height', //path for console log
            '#label-bedding-data-height', //element for querySelector
            {
                de: 'Einstreuhöhe',
                us: 'Bedding Height',
                en: 'Bedding Height'
            }
        ],
        [
            //DB_localization.content[27]
            'DB_localization/content/label-bedding-type', //path for console log
            '#label-bedding-type', //element for querySelector
            {
                de: 'Einstreuart',
                us: 'Bedding Type',
                en: 'Bedding Type'
            }
        ],
        [
            //DB_localization.content[28]
            'DB_localization/content/output-visual-comparison-user', //path for console log
            '#output-visual-comparison-user', //element for querySelector
            {
                de: 'Nutzer',
                us: 'User',
                en: 'User'
            }
        ]
    ],

    measurement_units: [
        [
            //DB_localization.measurement_units[0]
            'DB_localization/units/lenght', //path for console log
            '.unit-lenght', //element for querySelectorAll
            {
                de: 'cm',
                us: 'in',
                en: 'cm'    
            }
        ], 
        [
            //DB_localization.measurement_units[1]
            'DB_localization/units/surface-area-A', //path for console log
            '.unit-surface-area-A', //element for querySelectorAll
            {
                de: 'm²',
                us: 'sq.in',
                en: 'm²'    
            }
        ],
        [
            //DB_localization.measurement_units[2]
            'DB_localization/units/surface-area-B', //path for console log
            '.unit-surface-area-B', //element for querySelectorAll
            {
                de: 'cm²',
                us: 'sq.in',
                en: 'cm²'    
            }
        ],
        [
            //DB_localization.measurement_units[3]
            'DB_localization/units/factor', //path for console log
            '.unit-factor', //element for querySelectorAll
            {
                de: 'x',
                us: 'x',
                en: 'x'    
            }
        ],
        [
            //DB_localization.measurement_units[4]
            'DB_localization/units/minimum-surface-area-A', //path for console log
            '.minimum-surface-area-A', //element for querySelectorAll
            {
                de: '100x50',
                us: '32x18',
                en: '100x50'    
            }
        ],
        [
            //DB_localization.measurement_units[5]
            'DB_localization/units/minimum-surface-area-B', //path for console log
            '.minimum-surface-area-B', //element for querySelectorAll
            {
                de: '0,50',
                us: '775',
                en: '0.50'    
            }
        ],
        [
            //DB_localization.measurement_units[6]
            'DB_localization/units/minimum-surface-area-DE', //path for console log
            '.minimum-surface-area-DE', //element for querySelectorAll
            {
                de: '5.000',
                us: '775',
                en: '5,000'    
            }
        ],
        [
            //DB_localization.measurement_units[7]
            'DB_localization/units/minimum-surface-area-HSUS', //path for console log
            '.minimum-surface-area-HSUS', //element for querySelectorAll
            {
                de: '0,37',
                us: '576',
                en: '0.37'    
            }
        ],
        [
            //DB_localization.measurement_units[8]
            'DB_localization/units/minimum-surface-area-ASPCA', //path for console log
            '.minimum-surface-area-ASPCA', //element for querySelectorAll
            {
                de: '0,13',
                us: '200',
                en: '0.13'    
            }
        ],
        [
            //DB_localization.measurement_units[9]
            'DB_localization/units/volume', //path for console log
            '.unit-volume', //element for querySelectorAll
            {
                de: ' Liter',
                us: 'gal (us)',
                en: ' litre'    
            }
        ],
        [
            //DB_localization.measurement_units[10]
            'DB_localization/units/weight', //path for console log
            '.unit-weight', //element for querySelectorAll
            {
                de: 'kg',
                us: 'lb',
                en: 'kg'    
            }
        ]   
    ],

    default_attr: [
        [
            //DB_localization.default_attr[0]
            'DB_localization/default_attr/input-cage-width', //path for console log
            '#input-cage-width', //element for querySelector
            {
                de: 100,
                us: 32,
                en: 100,
                min: 10,
                max: 200,
                step: 0.50
            }
        ],
        [
            //DB_localization.default_attr[1]
            'DB_localization/default_attr/input-cage-depth', //path for console log
            '#input-cage-depth', //element for querySelector
            {
                de: 50,
                us: 18,
                en: 50,
                min: 10,
                max: 100,
                step: 0.50
            }
        ],
        [
            //DB_localization.default_attr[2]
            'DB_localization/default_attr/input-bedding-data-height', //path for console log
            '#input-bedding-data-height', //elemenet for querySelector
            {
                de: 25,
                us: 8,
                en: 25,
                min: 1,
                max: 100,
                step: 0.50
            }
        ]
    ],
    
    output_messages: [
        //DB_localization.output_messages[0]
        {
            de: 'nicht pressbar',
            us: 'not compressable',
            en: 'not compressable'
        },
        {
            de: `Dein Gehege erfüllt den Deutschen Standard der TVT zu `,
            us: `Your cage fulfills the US standard of the HSUS by `,
            en: `Your cage fulfills the German standard of the TVT by `
        }
    ]
};