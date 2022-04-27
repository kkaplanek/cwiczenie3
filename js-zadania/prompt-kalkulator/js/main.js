function numbers () {
    let one = Number ( prompt ("Podaj pierwszą liczbę") );
    let two = Number ( prompt ("Podaj drugą liczbę") );

    let paragraf1 = document.getElementById("p1");
    paragraf1.textContent = "Liczba 1: " + one;

    let paragraf2 = document.getElementById("p2");
    paragraf2.textContent = "Liczba 2: " + two;

    document.getElementById("add").onclick = function () {
        let result1 = one + two;
        let wynik1 = document.getElementById("wynik");
        wynik1.textContent = result1;
    
    }
    
    document.getElementById("substract").onclick = function () {
        let result2 = one - two;
        let wynik2 = document.getElementById("wynik");
        wynik2.textContent = result2;
        
    }
    
    document.getElementById("multiply").onclick = function () {
        let result3 = one * two;
        let wynik3 = document.getElementById("wynik");
        wynik3.textContent = result3;
        
    }
}

document.querySelector("button").onclick = function () {
    numbers ();
}