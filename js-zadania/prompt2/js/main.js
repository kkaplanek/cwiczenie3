function numbers () {
    
        let one = prompt("Podaj pierwszą liczbę");
        let two = prompt("Podaj drugą liczbę");

        let p1 = document.getElementById("pierwszy");
        p1.textContent = "Liczba 1 to " + one;
        let p2 = document.getElementById("drugi"); 
        p2.textContent = "Liczba 2 to " + two;
    
}

document.querySelector("button").onclick = function () {
    numbers ();
}

