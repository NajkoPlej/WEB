const pole = [6, 18, 24, 12, -10, 17, 15, 3,];

let novePole = [];
pole.forEacg(){
    if (pole[i] % 2 === 0 && pole[i] % 3 === 0){
        novePole.push(pole[i]);
    }
}

console.log(novePole);