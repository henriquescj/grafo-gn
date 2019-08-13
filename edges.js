var edgesArray = [];
g.edges = [];
// ailton-benedito-de-sousa
edgesArray = [
    'damares-alves',
    'leandro-ruschel',
    'bernardo-pires-kuster',
    'liziane-bayer',
    'joao-campos',
    'sargento-fahur',
    'magno-malta',
    'carlos-bolsonaro',
    'marco-feliciano',
    'eduardo-bolsonaro',
    'fernando-francischini',
    'onyx-lorenzoni',
    'jair-bolsonaro',
    'paulo-martins',
    'flavio-bolsonaro',
    'alberto-fraga',
    'joselito-muller',
    'joice-hasselmann',
    'alvaro-dias',
    'silas-malafaia',
    'rodrigo-constantino',
    'olavo-de-carvalho'
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'ailton-benedito-de-sousa' + index,
        source: 'ailton-benedito-de-sousa',
        target: person,
        size: 1,
        type: 'dash',
        color: "rgba(0,49,61,0.3)",
    });
});
// alan-rick
edgesArray = [
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'joice-hasselmann',
    'olavo-de-carvalho',
    'rodrigo-constantino',
    'onyx-lorenzoni',
    'alvaro-dias',
    'claudio-duarte',
    'jorge-linhares',
    'josue-goncalves',
    'jair-bolsonaro',
    'marco-feliciano',
    'silas-malafaia',
    'ana-paula-valadao',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'alan-rick' + index,
        source: 'alan-rick',
        target: person,
        size: 1,
        type: 'dash',
        color: "rgba(0,49,61,0.3)",
    });
});
// alberto-fraga
edgesArray = [
    'joice-hasselmann',
    'carlos-bolsonaro',
    'rodrigo-constantino',
    'major-vitor-hugo',
    'leandro-ruschel',
    // 'janaina-paschoal',
    'magno-malta',
    'paulo-martins',
    'delegado-waldir',
    'silas-camara',
    'major-olimpio',
    'marco-feliciano',
    'sargento-fahur',
    'eduardo-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'alberto-fraga' + index,
        source: 'alberto-fraga',
        target: person,
        size: 1,
        type: 'dash',
        color: "rgba(0,49,61,0.3)",
    });
});
// alexandre-frota
edgesArray = [
    'eduardo-bolsonaro',
    'delegado-waldir',
    'joice-hasselmann',
    'leandro-ruschel',
    'fernando-francischini',
    'joselito-muller',
    'rodrigo-constantino',
    'sargento-fahur',
    'onyx-lorenzoni',
    'silas-malafaia',
    'olavo-de-carvalho',
    'alvaro-dias',
    'magno-malta',
    'marco-feliciano',
    'jair-bolsonaro',
    'flavio-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'alexandre-frota' + index,
        source: 'alexandre-frota',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// alvaro-dias
edgesArray = [
    // 'selma-arruda',
    'damares-alves',
    'major-olimpio',
    'alexandre-frota',
    'eduardo-bolsonaro',
    'onyx-lorenzoni',
    'paulo-martins',
    'olavo-de-carvalho',
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'rodrigo-constantino',
    'alberto-fraga',
    'marco-feliciano',
    // 'felipe-francischini',
    'joice-hasselmann',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'alvaro-dias' + index,
        source: 'alvaro-dias',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// ana-lucia-camara
edgesArray = [
    'ana-paula-valadao',
    'naiane-camara',
    'philipe-camara',
    'andre-camara',
    'rebekah-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'ana-lucia-camara' + index,
        source: 'ana-lucia-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// ana-paula-valadao
edgesArray = [
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'ana-paula-valadao' + index,
        source: 'ana-paula-valadao',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// anderson-ferreira
edgesArray = [
    'silas-camara',
    'robson-rodovalho',
    'silas-malafaia',
    'joao-campos',
    'marco-feliciano',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'anderson-ferreira' + index,
        source: 'anderson-ferreira',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// andre-camara
edgesArray = [
    'olavo-de-carvalho',
    'magno-malta',
    'eduardo-bolsonaro',
    'flavio-bolsonaro',
    // 'elienai-camara',
    'heber-camara',
    'ana-paula-valadao',
    'josue-goncalves',
    'pastor-honorio-pinto',
    'juanribe-pagliarin',
    'marco-feliciano',
    'robson-rodovalho',
    'silas-malafaia',
    'tulio-ferreira',
    'luana-camara',
    'naiane-camara',
    'rebekah-camara',
    'philipe-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'andre-camara' + index,
        source: 'andre-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// bernardo-pires-kuster
edgesArray = [
    'joice-hasselmann',
    'paulo-martins',
    'jair-bolsonaro',
    'carlos-bolsonaro',
    'leandro-ruschel',
    'marco-feliciano',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'joselito-muller',
    'olavo-de-carvalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'bernardo-pires-kuster' + index,
        source: 'bernardo-pires-kuster',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// carlos-bolsonaro
edgesArray = [
    'damares-alves',
    'priscila-costa',
    'major-vitor-hugo',
    'bernardo-pires-kuster',
    'leandro-ruschel',
    'magno-malta',
    'sargento-fahur',
    'fernando-francischini',
    'joice-hasselmann',
    'onyx-lorenzoni',
    'joselito-muller',
    'rodrigo-constantino',
    'paulo-martins',
    'silas-malafaia',
    'olavo-de-carvalho',
    'marco-feliciano',
    'jair-bolsonaro',
    'eduardo-bolsonaro',
    'flavio-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'carlos-bolsonaro' + index,
        source: 'carlos-bolsonaro',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// carlos-gomes
edgesArray = [
    'julio-cesar-ribeiro',
    'liziane-bayer',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'carlos-gomes' + index,
        source: 'carlos-gomes',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// caroline-de-toni
edgesArray = [
    'bernardo-pires-kuster',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'joice-hasselmann',
    'rodrigo-constantino',
    'olavo-de-carvalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'caroline-de-toni' + index,
        source: 'caroline-de-toni',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// claudio-duarte
edgesArray = [
    'josue-goncalves',
    'jair-bolsonaro',
    'marco-feliciano',
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'claudio-duarte' + index,
        source: 'claudio-duarte',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// damares-alves
edgesArray = [
    'onyx-lorenzoni',
    'ana-paula-valadao',
    'joice-hasselmann',
    'olavo-de-carvalho',
    'carlos-bolsonaro',
    'magno-malta',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'damares-alves' + index,
        source: 'damares-alves',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// delegado-waldir
edgesArray = [
    'onyx-lorenzoni',
    'alvaro-dias',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'delegado-waldir' + index,
        source: 'delegado-waldir',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// eduardo-bolsonaro
edgesArray = [
    'damares-alves',
    'bernardo-pires-kuster',
    'major-olimpio',
    'leandro-ruschel',
    'magno-malta',
    'alvaro-dias',
    'sargento-fahur',
    'alberto-fraga',
    'platiny-soares',
    // 'felipe-francischini',
    'fernando-francischini',
    'onyx-lorenzoni',
    'olavo-de-carvalho',
    'joselito-muller',
    'joice-hasselmann',
    'paulo-martins',
    'rodrigo-constantino',
    'silas-malafaia',
    'marco-feliciano',
    'jair-bolsonaro',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'eduardo-bolsonaro' + index,
        source: 'eduardo-bolsonaro',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// eli-borges
edgesArray = [
    'ana-paula-valadao',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'eli-borges' + index,
        source: 'eli-borges',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// elienai-camara
edgesArray = [
    'josue-goncalves',
    'marcel-alexandre',
    'silas-camara',
    'heber-camara',
    'jorge-linhares',
    'marco-feliciano',
    'philipe-camara',
    'rebekah-camara',
    'ana-paula-valadao',
    'silas-malafaia',
    'naiane-camara',
    'luana-camara',
    'tulio-ferreira',
    'andre-camara',
];
// $.each(edgesArray, function (index, person) {
//     g.edges.push({
//         id: 'elienai-camara' + index,
//         source: 'elienai-camara',
//         target: person,
//         size: 1,
//         type: 'dash',
//     });
// });
// felipe-francischini
edgesArray = [
    'olavo-de-carvalho',
    'onyx-lorenzoni',
    'paulo-martins',
    'marco-feliciano',
    'alberto-fraga',
    'jair-bolsonaro',
    'philipe-camara',
    'rebekah-camara',
    'carlos-bolsonaro',
    'flavio-bolsonaro',
    'silas-malafaia',
    'robson-rodovalho',
    'alvaro-dias',
    'joice-hasselmann',
    'fernando-francischini',
];
// $.each(edgesArray, function (index, person) {
//     g.edges.push({
//         id: 'felipe-francischini' + index,
//         source: 'felipe-francischini',
//         target: person,
//         size: 1,
//         type: 'dash',
//     });
// });
// fernando-francischini
edgesArray = [
    'bernardo-pires-kuster',
    'major-vitor-hugo',
    'leandro-ruschel',
    'magno-malta',
    'alexandre-frota',
    'joselito-muller',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'olavo-de-carvalho',
    'rodrigo-constantino',
    'sargento-fahur',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'fernando-francischini' + index,
        source: 'fernando-francischini',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// flavio-bolsonaro
edgesArray = [
    'robson-rodovalho',
    'major-olimpio',
    'bernardo-pires-kuster',
    'leandro-ruschel',
    'alvaro-dias',
    'joselito-muller',
    'joice-hasselmann',
    'sargento-fahur',
    'paulo-martins',
    'magno-malta',
    'joao-campos',
    // 'felipe-francischini',
    'alberto-fraga',
    'fernando-francischini',
    'marco-feliciano',
    'onyx-lorenzoni',
    'silas-malafaia',
    'rodrigo-constantino',
    'olavo-de-carvalho',
    'jair-bolsonaro',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'flavio-bolsonaro' + index,
        source: 'flavio-bolsonaro',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// francisco-junior
edgesArray = [
    'liziane-bayer',
    'alexandre-frota',
    'magno-malta',
    'onyx-lorenzoni',
    'carlos-bolsonaro',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'major-vitor-hugo',
    'sargento-fahur',
    'delegado-waldir',
    'joice-hasselmann',
    'olavo-de-carvalho',
    'joao-campos',
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'francisco-junior' + index,
        source: 'francisco-junior',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// gilson-de-souza
edgesArray = [
    'marco-feliciano',
    'alvaro-dias',
    'joice-hasselmann',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'gilson-de-souza' + index,
        source: 'gilson-de-souza',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// heber-camara
edgesArray = [
    'silas-malafaia',
    'luana-camara',
    'marcel-alexandre',
    'andre-camara',
    'philipe-camara',
    'rebekah-camara',
    'silas-camara',
    // 'elienai-camara',
    'naiane-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'heber-camara' + index,
        source: 'heber-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// helio-bolsonaro
edgesArray = [
    'sargento-fahur',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'helio-bolsonaro' + index,
        source: 'helio-bolsonaro',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// hidekazu-takayama
edgesArray = [
    'bernardo-pires-kuster',
    'leandro-ruschel',
    'magno-malta',
    'alberto-fraga',
    'onyx-lorenzoni',
    'marco-feliciano',
    'eduardo-bolsonaro',
    'joselito-muller',
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'rodrigo-constantino',
    'fernando-francischini',
    'flavio-bolsonaro',
    'silas-malafaia',
    'joice-hasselmann',
    'alvaro-dias',
    'olavo-de-carvalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'hidekazu-takayama' + index,
        source: 'hidekazu-takayama',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// jair-bolsonaro
edgesArray = [
    'leandro-ruschel',
    'bernardo-pires-kuster',
    'major-olimpio',
    'platiny-soares',
    'alexandre-frota',
    'magno-malta',
    'sargento-fahur',
    'alberto-fraga',
    'fernando-francischini',
    'onyx-lorenzoni',
    'joice-hasselmann',
    'joselito-muller',
    'paulo-martins',
    'olavo-de-carvalho',
    'rodrigo-constantino',
    'eduardo-bolsonaro',
    'silas-malafaia',
    'marco-feliciano',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'jair-bolsonaro' + index,
        source: 'jair-bolsonaro',
        target: person,
        size: 1,
        type: 'dash',
        color: "rgba(0,49,61,0.3)",
    });
});
// jaufran-siqueira
edgesArray = [
    'joselito-muller',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'jaufran-siqueira' + index,
        source: 'jaufran-siqueira',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// joao-campos
edgesArray = [
    'anderson-ferreira',
    'jair-bolsonaro',
    'robson-rodovalho',
    'francisco-junior',
    'marcos-rogerio',
    'ana-paula-valadao',
    'alberto-fraga',
    'josue-goncalves',
    'marco-feliciano',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'joao-campos' + index,
        source: 'joao-campos',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// joel-da-harpa
edgesArray = [
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'joel-da-harpa' + index,
        source: 'joel-da-harpa',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// joice-hasselmann
edgesArray = [
    'alexandre-frota',
    'fernando-francischini',
    'bernardo-pires-kuster',
    'magno-malta',
    'marco-feliciano',
    'paulo-martins',
    'onyx-lorenzoni',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'olavo-de-carvalho',
    'rodrigo-constantino',
    // 'felipe-francischini',
    'alvaro-dias',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'joice-hasselmann' + index,
        source: 'joice-hasselmann',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// jorge-linhares
edgesArray = [
    'claudio-duarte',
    'silas-malafaia',
    'josue-goncalves',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'jorge-linhares' + index,
        source: 'jorge-linhares',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// joselito-muller
edgesArray = [
    'marco-feliciano',
    'damares-alves',
    'bernardo-pires-kuster',
    'leandro-ruschel',
    'onyx-lorenzoni',
    'magno-malta',
    'flavio-bolsonaro',
    'fernando-francischini',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'paulo-martins',
    'alvaro-dias',
    'rodrigo-constantino',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'joselito-muller' + index,
        source: 'joselito-muller',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// josue-goncalves
edgesArray = [
    'claudio-duarte',
    'pastor-honorio-pinto',
    'anderson-ferreira',
    'philipe-camara',
    'rebekah-camara',
    'jorge-linhares',
    'naiane-camara',
    'pastor-estevam-fernandes',
    'ana-paula-valadao',
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'josue-goncalves' + index,
        source: 'josue-goncalves',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// juanribe-pagliarin
edgesArray = [
    'magno-malta',
    'ana-paula-valadao',
    'rebekah-camara',
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'juanribe-pagliarin' + index,
        source: 'juanribe-pagliarin',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// julio-cesar-ribeiro
edgesArray = [
    'damares-alves',
    'alexandre-frota',
    'silas-camara',
    'mecias-de-jesus',
    'carlos-bolsonaro',
    'onyx-lorenzoni',
    'marco-feliciano',
    'lucia-rodovalho',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'alberto-fraga',
    'magno-malta',
    'robson-rodovalho',
    'carlos-gomes',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'julio-cesar-ribeiro' + index,
        source: 'julio-cesar-ribeiro',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// leandro-ruschel
edgesArray = [
    'carlos-bolsonaro',
    'bernardo-pires-kuster',
    'magno-malta',
    'sargento-fahur',
    'joselito-muller',
    'fernando-francischini',
    'paulo-martins',
    'marco-feliciano',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'onyx-lorenzoni',
    'joice-hasselmann',
    'jair-bolsonaro',
    'rodrigo-constantino',
    'olavo-de-carvalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'leandro-ruschel' + index,
        source: 'leandro-ruschel',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// liziane-bayer
edgesArray = [
    'carlos-bolsonaro',
    'leandro-ruschel',
    'joice-hasselmann',
    'eduardo-bolsonaro',
    'fernando-francischini',
    'claudio-duarte',
    'carlos-gomes',
    'magno-malta',
    'rodrigo-constantino',
    'olavo-de-carvalho',
    'jair-bolsonaro',
    'lucia-rodovalho',
    'robson-rodovalho',
    'ana-paula-valadao',
    'marco-feliciano',
    'silas-malafaia',
    'onyx-lorenzoni',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'liziane-bayer' + index,
        source: 'liziane-bayer',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// luana-camara
edgesArray = [
    'silas-camara',
    'marco-feliciano',
    'pastor-honorio-pinto',
    // 'elienai-camara',
    'naiane-camara',
    'rebekah-camara',
    'philipe-camara',
    'andre-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'luana-camara' + index,
        source: 'luana-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// lucia-rodovalho
edgesArray = [
    'olavo-de-carvalho',
    'onyx-lorenzoni',
    'joice-hasselmann',
    'leandro-ruschel',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'robson-rodovalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'lucia-rodovalho' + index,
        source: 'lucia-rodovalho',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// luciano-subira
edgesArray = [
    'jair-bolsonaro',
    'marcio-valadao',
    'claudio-duarte',
    'josue-goncalves',
    'silas-malafaia',
    'ana-paula-valadao',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'luciano-subira' + index,
        source: 'luciano-subira',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// luiz-philippe-o-braganca
edgesArray = [
    'bernardo-pires-kuster',
    'sargento-fahur',
    'magno-malta',
    'joselito-muller',
    'fernando-francischini',
    'paulo-martins',
    'jair-bolsonaro',
    'onyx-lorenzoni',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'olavo-de-carvalho',
    'rodrigo-constantino',
    'leandro-ruschel',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'luiz-philippe-o-braganca' + index,
        source: 'luiz-philippe-o-braganca',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// magno-malta
edgesArray = [
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'onyx-lorenzoni',
    'alvaro-dias',
    'robson-rodovalho',
    'juanribe-pagliarin',
    'ana-paula-valadao',
    'claudio-duarte',
    'silas-malafaia',
    'jorge-linhares',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'magno-malta' + index,
        source: 'magno-malta',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// major-olimpio
edgesArray = [
    'eduardo-bolsonaro',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'major-olimpio' + index,
        source: 'major-olimpio',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// major-vitor-hugo
edgesArray = [
    'bernardo-pires-kuster',
    'major-olimpio',
    'sargento-fahur',
    'onyx-lorenzoni',
    'fernando-francischini',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'flavio-bolsonaro',
    'magno-malta',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'major-vitor-hugo' + index,
        source: 'major-vitor-hugo',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// marcel-alexandre
edgesArray = [
    'fernando-francischini',
    'damares-alves',
    'olavo-de-carvalho',
    'leandro-ruschel',
    'paulo-martins',
    'joice-hasselmann',
    'alexandre-frota',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'rodrigo-constantino',
    'onyx-lorenzoni',
    'magno-malta',
    'jair-bolsonaro',
    'claudio-duarte',
    'heber-camara',
    'rebekah-camara',
    'pastor-honorio-pinto',
    'andre-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'marcel-alexandre' + index,
        source: 'marcel-alexandre',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// marcio-valadao
edgesArray = [
    'magno-malta',
    'pastor-sergio-queiroz',
    'josue-goncalves',
    'marcel-alexandre',
    'joice-hasselmann',
    'ana-paula-valadao',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'marcio-valadao' + index,
        source: 'marcio-valadao',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// marco-feliciano
edgesArray = [
    'silas-malafaia',
    'alexandre-frota',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'joice-hasselmann',
    'jair-bolsonaro',
    'paulo-martins',
    'olavo-de-carvalho',
    'joao-campos',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'marco-feliciano' + index,
        source: 'marco-feliciano',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// marcos-rogerio
edgesArray = [
    'carlos-bolsonaro',
    'olavo-de-carvalho',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'onyx-lorenzoni',
    'alvaro-dias',
    'joao-campos',
    'silas-malafaia',
    'marco-feliciano',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'marcos-rogerio' + index,
        source: 'marcos-rogerio',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// mecias-de-jesus
edgesArray = [
    'leandro-ruschel',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'mecias-de-jesus' + index,
        source: 'mecias-de-jesus',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// michele-collins
edgesArray = [
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'michele-collins' + index,
        source: 'michele-collins',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// naiane-camara
edgesArray = [
    'josue-goncalves',
    'ana-paula-valadao',
    'pastor-honorio-pinto',
    'marco-feliciano',
    'silas-malafaia',
    'silas-camara',
    'tulio-ferreira',
    'luana-camara',
    'rebekah-camara',
    'philipe-camara',
    'andre-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'naiane-camara' + index,
        source: 'naiane-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// olavo-de-carvalho
edgesArray = [
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'marco-feliciano',
    'joice-hasselmann',
    'jair-bolsonaro',
    'paulo-martins',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'olavo-de-carvalho' + index,
        source: 'olavo-de-carvalho',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// onyx-lorenzoni
edgesArray = [
    'leandro-ruschel',
    'alexandre-frota',
    'olavo-de-carvalho',
    'marco-feliciano',
    'magno-malta',
    'joselito-muller',
    'marcos-rogerio',
    'jair-bolsonaro',
    'fernando-francischini',
    'sargento-fahur',
    'carlos-bolsonaro',
    'flavio-bolsonaro',
    'delegado-waldir',
    'eduardo-bolsonaro',
    'alvaro-dias',
    'joice-hasselmann',
    'paulo-martins',
    'rodrigo-constantino',
    'alberto-fraga',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'onyx-lorenzoni' + index,
        source: 'onyx-lorenzoni',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// pastor-altair-germano
edgesArray = [
    'josue-goncalves',
    'andre-camara',
    'rebekah-camara',
    'silas-malafaia',
    'silas-malafaia',
    'michele-collins',
    'ana-paula-valadao',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-altair-germano' + index,
        source: 'pastor-altair-germano',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// pastor-estevam-fernandes
edgesArray = [
    'silas-malafaia',
    'josue-goncalves',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-estevam-fernandes' + index,
        source: 'pastor-estevam-fernandes',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// pastor-eurico
edgesArray = [
    'silas-malafaia',
    'marco-feliciano',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-eurico' + index,
        source: 'pastor-eurico',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// pastor-francisco-tercio
edgesArray = [
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'fernando-francischini',
    'jair-bolsonaro',
    'flavio-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-francisco-tercio' + index,
        source: 'pastor-francisco-tercio',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// pastor-honorio-pinto
edgesArray = [
    'damares-alves',
    'onyx-lorenzoni',
    'leandro-ruschel',
    'jair-bolsonaro',
    'marco-feliciano',
    'claudio-duarte',
    'ana-paula-valadao',
    'jorge-linhares',
    'josue-goncalves',
    'andre-camara',
    'philipe-camara',
    'silas-malafaia',
    'rebekah-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-honorio-pinto' + index,
        source: 'pastor-honorio-pinto',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// pastor-jonatas-camara
edgesArray = [
    'tulio-ferreira',
    'andre-camara',
    'luana-camara',
    'naiane-camara',
    'philipe-camara',
    'rebekah-camara',
    'silas-malafaia',
    'josue-goncalves',
    'marco-feliciano',
    'silas-camara',
    'naiane-camara',
    'silas-malafaia',
    'philipe-camara',
    'luana-camara',
    'rebekah-camara',
    'andre-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-jonatas-camara' + index,
        source: 'pastor-jonatas-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// pastor-paulo-bengtson
edgesArray = [
    'damares-alves',
    'olavo-de-carvalho',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-paulo-bengtson' + index,
        source: 'pastor-paulo-bengtson',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// pastor-sargento-isidorio
edgesArray = [
    'flavio-bolsonaro',
]
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-sargento-isidorio' + index,
        source: 'pastor-sargento-isidorio',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// pastor-sergio-queiroz
edgesArray = [
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'pastor-estevam-fernandes',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pastor-sergio-queiroz' + index,
        source: 'pastor-sergio-queiroz',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// paulo-martins
edgesArray = [
    'bernardo-pires-kuster',
    'leandro-ruschel',
    'magno-malta',
    'alberto-fraga',
    'onyx-lorenzoni',
    'marco-feliciano',
    'eduardo-bolsonaro',
    'joselito-muller',
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'rodrigo-constantino',
    'fernando-francischini',
    'flavio-bolsonaro',
    'silas-malafaia',
    'joice-hasselmann',
    'alvaro-dias',
    'olavo-de-carvalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'paulo-martins' + index,
        source: 'paulo-martins',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// philipe-camara
edgesArray = [
    'carlos-bolsonaro',
    'marcio-valadao',
    'jair-bolsonaro',
    'pastor-estevam-fernandes',
    'robson-rodovalho',
    'claudio-duarte',
    // 'elienai-camara',
    'jorge-linhares',
    'silas-camara',
    'ana-paula-valadao',
    'josue-goncalves',
    'pastor-honorio-pinto',
    'juanribe-pagliarin',
    'marco-feliciano',
    'naiane-camara',
    'silas-malafaia',
    'rebekah-camara',
    'andre-camara',
    'luana-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'philipe-camara' + index,
        source: 'philipe-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// platiny-soares
edgesArray = [
    // 'elienai-camara',
    'marcel-alexandre',
    'heber-camara',
    'silas-camara',
    'marco-feliciano',
    'silas-malafaia',
    'eduardo-bolsonaro',
    'carlos-bolsonaro',
    'olavo-de-carvalho',
    'flavio-bolsonaro',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'platiny-soares' + index,
        source: 'platiny-soares',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// pr-jecer-goes
edgesArray = [
    'olavo-de-carvalho',
    'damares-alves',
    'jair-bolsonaro',
    'alexandre-frota',
    'flavio-bolsonaro',
    'magno-malta',
    'fernando-francischini',
    'joice-hasselmann',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'pr-jecer-goes' + index,
        source: 'pr-jecer-goes',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// priscila-costa
edgesArray = [
    'major-vitor-hugo',
    'damares-alves',
    'onyx-lorenzoni',
    'marco-feliciano',
    'rebekah-camara',
    'alexandre-frota',
    'sargento-fahur',
    'major-olimpio',
    'leandro-ruschel',
    'bernardo-pires-kuster',
    'olavo-de-carvalho',
    'fernando-francischini',
    'carlos-bolsonaro',
    'paulo-martins',
    'rodrigo-constantino',
    'joice-hasselmann',
    'flavio-bolsonaro',
    'jair-bolsonaro',
    'eduardo-bolsonaro',
    'silas-malafaia',
    'josue-goncalves',
    'alvaro-dias',
    'magno-malta',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'priscila-costa' + index,
        source: 'priscila-costa',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// rafaell-milas-de-oliveira
edgesArray = [
    'olavo-de-carvalho',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'eduardo-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'rafaell-milas-de-oliveira' + index,
        source: 'rafaell-milas-de-oliveira',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// rebekah-camara
edgesArray = [
    'flavio-bolsonaro',
    'jair-bolsonaro',
    'ana-paula-valadao',
    'marco-feliciano',
    'pastor-honorio-pinto',
    'silas-malafaia',
    'naiane-camara',
    'andre-camara',
    'luana-camara',
    'philipe-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'rebekah-camara' + index,
        source: 'rebekah-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// robson-rodovalho
edgesArray = [
    'carlos-bolsonaro',
    'fernando-francischini',
    'onyx-lorenzoni',
    'rodrigo-constantino',
    'jair-bolsonaro',
    'jorge-linhares',
    'ana-paula-valadao',
    'joao-campos',
    'silas-malafaia',
    'lucia-rodovalho',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'robson-rodovalho' + index,
        source: 'robson-rodovalho',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// rodrigo-constantino
edgesArray = [
    'marco-feliciano',
    'fernando-francischini',
    'onyx-lorenzoni',
    'bernardo-pires-kuster',
    'eduardo-bolsonaro',
    'magno-malta',
    'leandro-ruschel',
    'joice-hasselmann',
    'alvaro-dias',
    'joselito-muller',
    'paulo-martins',
    'flavio-bolsonaro',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'rodrigo-constantino' + index,
        source: 'rodrigo-constantino',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// sargento-fahur
edgesArray = [
    'alexandre-frota',
    'alberto-fraga',
    'joice-hasselmann',
    'onyx-lorenzoni',
    'jair-bolsonaro',
    'fernando-francischini',
    'carlos-bolsonaro',
    'flavio-bolsonaro',
    'eduardo-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'sargento-fahur' + index,
        source: 'sargento-fahur',
        target: person,
        size: 1,
        type: 'dash',
        color: "rgba(0,49,61,0.5)",
    });
});
// selma-arruda
edgesArray = [
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
];
// $.each(edgesArray, function (index, person) {
//     g.edges.push({
//         id: 'selma-arruda' + index,
//         source: 'selma-arruda',
//         target: person,
//         size: 1,
//         type: 'dash',
//     });
// });
// silas-camara
edgesArray = [
    'platiny-soares',
    'alberto-fraga',
    'heber-camara',
    'marco-feliciano',
    'alvaro-dias',
    'ana-paula-valadao',
    'naiane-camara',
    'luana-camara',
    'andre-camara',
    'rebekah-camara',
    'philipe-camara',
    'silas-malafaia',
    'rebekah-camara',
    // 'elienai-camara',
    'silas-malafaia',
    'tulio-ferreira',
    'luana-camara',
    'naiane-camara',
    'philipe-camara',
    'andre-camara',
    'marco-feliciano',
    'marcel-alexandre',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'silas-camara' + index,
        source: 'silas-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// silas-malafaia
edgesArray = [
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'eduardo-bolsonaro',
    'jair-bolsonaro',
    'marco-feliciano',
    'magno-malta',
    'ana-paula-valadao',
    'claudio-duarte',
    'pastor-estevam-fernandes',
    'jorge-linhares',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'silas-malafaia' + index,
        source: 'silas-malafaia',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(203,154,0,0.5)',
    });
});
// soraya-thronicke
edgesArray = [
    'onyx-lorenzoni',
    'damares-alves',
    'bernardo-pires-kuster',
    'sargento-fahur',
    'major-olimpio',
    'flavio-bolsonaro',
    'alexandre-frota',
    'carlos-bolsonaro',
    'fernando-francischini',
    'magno-malta',
    'eduardo-bolsonaro',
    'rodrigo-constantino',
    'olavo-de-carvalho',
    'jair-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'soraya-thronicke' + index,
        source: 'soraya-thronicke',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
// thiago-camara
edgesArray = [
    'marco-feliciano',
    'marcel-alexandre',
    'ana-paula-valadao',
    'robson-rodovalho',
    'lucia-rodovalho',
    'silas-malafaia',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'thiago-camara' + index,
        source: 'thiago-camara',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// tulio-ferreira
edgesArray = [
    'ana-paula-valadao',
    'rebekah-camara',
    'andre-camara',
    'naiane-camara',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'tulio-ferreira' + index,
        source: 'tulio-ferreira',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(112,0,13,0.5)',
    });
});
// victorio-galli
edgesArray = [
    'marco-feliciano',
    'olavo-de-carvalho',
    'leandro-ruschel',
    'major-olimpio',
    'fernando-francischini',
    'magno-malta',
    'silas-malafaia',
    'alexandre-frota',
    'flavio-bolsonaro',
    'carlos-bolsonaro',
    'jair-bolsonaro',
    'eduardo-bolsonaro',
];
$.each(edgesArray, function (index, person) {
    g.edges.push({
        id: 'victorio-galli' + index,
        source: 'victorio-galli',
        target: person,
        size: 1,
        type: 'dash',
        color: 'rgba(0,49,61,0.5)',
    });
});
