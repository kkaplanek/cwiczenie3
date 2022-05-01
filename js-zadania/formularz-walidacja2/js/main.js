document.getElementById("przycisk").onclick = function () {
    

    let telefon = document.getElementById("phone").value;
    
    if (telefon == "") {
       alert('Wpisz numer telefonu');
       return false;
    } 
    
    else if (telefon.length > 9 || telefon.length < 9) {
        alert('Wprowadzono nieprawidłowy numer');
        return false;
    }

}

