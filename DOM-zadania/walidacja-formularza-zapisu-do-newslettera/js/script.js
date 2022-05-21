
let myForm = document.getElementById('form');
let allCheckbox = document.getElementById('agreement-all');

const validate = (event) => {
    
    let name = document.getElementById('name');
    let mail = document.getElementById('email');
    let checkboxOne = document.getElementById('agreement-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = "";

    if (name.value.trim() == "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko!';
        errors.appendChild(liError);
    } 
    
    if (mail.value.trim() == "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail!';
        errors.appendChild(liError);
    }

    if (!mail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @!';
        errors.appendChild(liError);
    }

    if (checkboxOne.checked == false) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś pierwszej zgody!';
        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    };
};

const agreementAll = (event) => {
    let checkboxOne = document.getElementById('agreement-1');
    let checkboxTwo = document.getElementById('agreement-2');

    checkboxOne.checked = event.target.checked;
    checkboxTwo.checked = event.target.checked;

    checkboxOne.disabled = event.target.checked;
    checkboxTwo.disabled = event.target.checked;
};


myForm.addEventListener('submit', validate);
allCheckbox.addEventListener('change', agreementAll);
