function formularz () {

    let one = prompt ("Podaj imię");
    let two = prompt ("Podaj nazwisko");
    let three = prompt ("Podaj adres email");

    let imie = document.getElementById("name");
    /* imie.value = one; */
    
    let nazwisko = document.getElementById("surname");
    /* nazwisko.value = two; */

    let adres = document.getElementById("email");
    /* adres.value = three; */

    if (one == "") {
    imie.value = "błąd";
    } else {
        imie.value = one;
    }
    
    if (two == "") {
        nazwisko.value = "błąd";
    } else {
        nazwisko.value = two;
    }
    
    
    if (three == "") {
        adres.value = "błąd";
    } else {
        adres.value = three;
    }

}

formularz ();