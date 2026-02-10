script.js:
 
const chlieb = 1.50;
const mlieko = 0.90;
const maslo = 2.30;
 
const cena = 2 * chlieb + 1 * maslo + 3 * mlieko;
 
console.log(`Cena chleba je: ${chlieb} EUR`);
console.log(`Cena mlieka je: ${maslo} EUR`);
console.log(`Cena masla je: ${mlieko} EUR`);
 
console.log(`Cena nákupu je: ${cena} EUR`);
 
 
 
const kmtoMile = 0.621371192;
const km = 5;
const miles = km * kmtoMile;
 
console.log(`${km} kilometrov je ${miles.toFixed(2)} míľ.`);
 
 
 
const g = 2500;
const kg = g / 1000;
 
console.log(`${g} gramov je ${kg} kilogramov.`);
 
 
 
const C = 22;
const F = (C * 9/5) + 32;
 
console.log(`${C}°C je ${F.toFixed(2)}°F.`);
 
 
 
let meno = "Peter";
let priezvisko = "Novák";
const lowerCaseMeno = meno.toLowerCase();
const upperCasePriezvisko = priezvisko.toUpperCase();
 
const celkovyPocetZnakov = meno.lenght + priezvisko.lenght + 1;
 
console.log(`Meno a priezvisko: ${lowerCaseMeno} ${upperCasePriezvisko}`);
console.log(`Celkový počet znakov: ${celkovyPocetZnakov}`);
 
 
const celeMeno = [meno, priezvisko];
 
inc = celeMeno[0] + "." + celeMeno[6] + ".";
 
 
const prvePismenoMena = meno.charAt(0);
const prvePismenoPriezviska = priezvisko.charAt(0);
 
 
console.log(`Prvé písmeno mena: ${prvePismenoMena}, Prvé písmeno priezviska: ${prvePismenoPriezviska}`);
 
 
 
const email = `${meno.toLowerCase()}.${priezvisko.toUpperCase()}@gmail.com`;
 
console.log(`E-mailová adresa: ${email}`);
 
 
 
const veta = "JavaScript je super jazyk";
const veta1 = "Programovanie nás naozaj baví";
 
const dlzkaVety = veta.lenght + veta1.lenght
 
console.log(`${}`)
 
if (veta > veta1) {
    console.log(`Dlhšia veta je: "${veta}`);
} else if (veta1 > veta) {
    console.log(`Dlhšia veta je: "${veta1"`);
}
 