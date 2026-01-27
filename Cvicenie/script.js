console.log("Prvé cvičenie : Výpočet nákupnej ceny");	
//Nákupné položky a ich ceny//
const chlieb = 1.50 ;
const mlieko = 0.90;
const maslo = 2.30;

const cena = 2*chlieb + 3*mlieko + 1*maslo;

console.log(`Cena mlieka je:  ${chlieb * 2} €`);
console.log(`Cena mlieka je:  ${mlieko * 3} €`);
console.log(`Cena mlieka je:  ${maslo * 1} €`);
console.log("Celková cena nákupu je: " + cena + " €");


//Kilometre na míle//
console.log("Prvé druhé : Premena kilometrov na míle");	

const mitokm = 0.621371;
let km = 10;
let mile = km * mitokm;

console.log(`${km} kilometrov je ${mile.toFixed(2)} míľ.`);


//Teplota v Fahrenheitoch//
console.log("Tretie cvičenie : Premena teploty z Celzia na Fahrenheity");
let stupneC = 5;
const Fahrenheit = (stupneC * 9/5) + 32;

console.log(`${stupneC} stupňov Celzia je ${Fahrenheit.toFixed(2)} stupňov Fahrenheita.`);