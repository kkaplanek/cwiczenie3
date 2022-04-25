let text1 = 'Uwielbiam JavaScript';

let text2 = 'Jestem świetnym programistą';

function longer (str1, str2) {
    if (str1.length > str2.length) {
        return str1;
     } else if (str2.length > str1.length) {
        return str2;
     }
}

let wynik = longer(text1, text2);

console.log(wynik);

 