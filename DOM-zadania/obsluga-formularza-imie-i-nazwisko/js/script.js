

let formularz = document.querySelector('form#form');


const wyslijFormularz = (event) => {
    event.preventDefault();

    let imie = document.querySelector('[name="fname"]');

    let nazwisko = document.querySelector('[name="lname"]');

    console.log(imie.value + " " + nazwisko.value);
}


formularz.addEventListener('submit', wyslijFormularz);