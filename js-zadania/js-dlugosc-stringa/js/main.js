let text1 = 'Uwielbiam JavaScript';

let text2 = 'Jestem świetnym programistą';

function longer (str1, str2) {
    if (str1.length > str2.length) {
        console.log(str1);
     } else if (str2.length > str1.length) {
         console.log(str2);
     }
}

longer(text1, text2);

 