const a = document.getElementById("strana1");
const b = document.getElementById("strana2");
const c = document.getElementById("strana3");

const btn = document.getElementById("btn");
btn.addEventListener("click", porovnajStrany);
function porovnajStrany(event){
    const prva = a.value;
    const druha = b.value;
    const tretia = c.value ;

    if(a == b && b == c){
        console.log("Trojuholnik je rovnostranný");
    }
}


