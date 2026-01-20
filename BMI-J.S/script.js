const vaha = prompt("Zadaj hmotnostť v kilogramoch");
const vyska = prompt("Zadaj výška v metroch");

console.log(vaha);
console.log(vyska);

const bmi = vaha / vyska*vyska ;

console.log(bmi);

if (bmi < 18.5) {
    console.log("Podváha");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("Normálna váha");
}  else if (bmi >= 25 && bmi < 30) {
    console.log("Nadváha");
} else (bmi >= 30 && bmi < 40)
    console.log("Obezita");


