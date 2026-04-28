const teploty = [12,5-6,1,-9,4,8];
let spoluTeploty = 0;
let priemer = 0;

console.log(teploty);
//console.log(`spoluTeploty = spoluTeploty + teplota;`)

teploty.forEach(function(teplota){
    spoluTeploty = spoluTeploty + teplota;
    //console.log(`${spoluTeploty} = ${spoluTeploty} + ${teplota} ;`) //kontrolny výpis 
    

    if(teplota <= 0){
        console.log(`${teplota}°C : Nebezpečenstvo námrazy`);
    }
    else if (0 < teplota && teplota <= 4){
        console.log(`${teplota}°C : Kasovita cesta`);
    }
    else {
        console.log(`${teplota}°C : Bez námrazy`);
    }


}); //foreach == cyklus, s ktorým prechádzame pole, vytiahne z pola kazdy prvok, da sa do novej premennej "teplota"
priemer = spoluTeploty / teploty.length;
//console.log(`Priemerna teplota je ${priemer.toFixed(2)}`); //zaokruhli priemer na 2 dessatinné miesta