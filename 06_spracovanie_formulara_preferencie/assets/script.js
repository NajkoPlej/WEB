const form = document.getElementById('newsletterForm');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){

    event.preventDefault(); //zastavi obnovenie stranky

    const menoInput = document.getElementById('meno');
    const meno = menoInput.value;

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const poleCheckboxov = document.querySelectorAll('input [type="checkbox]"]');

    const poleCheckboxov = Array.from(vsetkyCheckboxy); //prevod nodelistu na pole (aby sme ho mohli filtrovat)

    console.log(meno)
};


