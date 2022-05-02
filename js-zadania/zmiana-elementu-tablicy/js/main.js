let arr = [4, 50, 234];

function tablica (tab1) {
    console.log(tab1);

    if (tab1[0] > 10)  {
        tab1[0] = 5;
    }

    if (tab1[1] > 10) {
        tab1[1] = 5;
    }

    if (tab1[2] > 10) {
        tab1[2] = 5;
    }
}

tablica(arr);