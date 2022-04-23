let one = 'Wynik dodawania wynosi';
let two = 'Wynik odejmowania wynosi';
let three = 'Wynik mnożenia wynosi';

function dzialania (num1, num2) {
    let add = num1 + num2;
    if (add > 0) {
    console.log (one, add);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
    let sub = num1 - num2;
    if (sub > 0) {
    console.log (two, sub);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
    let multiply = num1 * num1;
    if (multiply > 0) { 
    console.log (three, multiply);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
}