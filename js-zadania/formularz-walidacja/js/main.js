document.getElementById("przycisk").onclick = function (e){
    e.preventDefault ();
    let adres = document.getElementById("email").value;

    if (adres == "") {
        alert ("Wpisz adres email");
    }

}