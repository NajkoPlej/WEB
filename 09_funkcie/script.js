let pocet = 0;



function pozdrav (){

    let vysledok = document.getElementById('vysledok1'); //vytvoril som premennu, ktoru som zobral z html
    vysledok.textContent = 'Zdravím'; //vypise text do html

    vysledok.style.color = 'darkgreen'; //pridam tomu vizual
    vysledok.style.fontweight = 'bold';
}
function zmenaFarbuPozadia (){
    const farby = ['#ff6b6b', '#8BDFDD', '#F48F68', '#FFE394', '#C9CAAC', '#CCD67F'];//pole kde je 5/6 farbieb a random vygeneruje jednu z nich
    let vysledok = document.getElementById('vysledok1');

    const nahodnyIndex = Math.floor(Math.random() * farby.length);

    document.body.style.background = farby[nahodnyIndex];
    vysledok.textContent = `Farba pozadia je zmenená na ${farby[nahodnyIndex]}`;

}


function zvysPocitadlo(){
    pocet++; //zvys o jedna
    document.getElementById('pocitadlo').textContent = pocet; //napln ho aktualnou hodnotou

}
function znizPocitadlo(){
    pocet--; //zniz o jedna
    document.getElementById('pocitadlo').textContent = pocet;//napln ho aktualnou hodnotou

}
function resetujPocitadlo(){
    pocet = 0;
    document.getElementById('pocitadlo').textContent = pocet;
}


function zvacsFont(){
   const vysledokText = document.getElementById("vysledokText");
   vysledokText.style.fontSize = '30px';
}
function zmensFont(){
    const vysledokText = document.getElementById("vysledokText");
    vysledokText.style.fontSize = '12px';
}
function normalnyFont(){
    const vysledokText = document.getElementById("vysledokText");
    vysledokText.style.fontSize = '1.1em';
}


function nahodneCislo(){
    let vysledokNahodne = document.getElementById('vysledokNahodne');
    const nahodneCislo = Math.floor(Math.random() * 100);

    vysledokNahodne.textContent = `Cislo ktoré som vybral je: ${nahodneCislo}`; 
}
function zmenaFarbyTextu(){
    let vysledokNahodne = document.getElementById('vysledokNahodne');
    const textFarba = ['#37353E', '#44444E', '#715A5A', '#D3DAD9', '#511D43', '#18230F'];//pole kde je 5/6 farbieb a random vygeneruje jednu z nich

    const nahodnaFarbaTextu = Math.floor(Math.random() * textFarba.length);

    vysledokNahodne.style.color = textFarba[nahodnaFarbaTextu];
}






const pozdravBtn = document.getElementById('pozdravBtn');
const zmenaPozadiaBtn = document.getElementById('zmenFarbuBtn');

const zvysBtn = document.getElementById('zvysBtn');
const znizBtn = document.getElementById('znizBtn');
const resetBtn = document.getElementById('resetBtn');

const zvacsBtn = document.getElementById('zvacsBtn');
const zmensBtn = document.getElementById('zmensBtn');
const normalnyBtn = document.getElementById('normalnyBtn');

const nahodnecisloBtn = document.getElementById('nahodnecisloBtn');
const nahodnaFarbaBtn = document.getElementById('nahodnaFarbaBtn');







pozdravBtn.addEventListener('click', pozdrav); //dam tomu buttnu funkciu
zmenFarbuBtn.addEventListener('click', zmenaFarbuPozadia);

zvysBtn.addEventListener('click', zvysPocitadlo);
znizBtn.addEventListener('click', znizPocitadlo);
resetBtn.addEventListener('click', resetujPocitadlo);

zvacsBtn.addEventListener('click', zvacsFont);
zmensBtn.addEventListener('click', zmensFont);
normalnyBtn.addEventListener('click', normalnyFont);

nahodneCisloBtn.addEventListener('click', nahodneCislo);
nahodnaFarbaBtn.addEventListener('click', zmenaFarbyTextu);