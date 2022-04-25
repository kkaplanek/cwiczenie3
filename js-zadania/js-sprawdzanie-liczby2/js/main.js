function dwadziescia (num1, num2) {
    if (num1 == 20) {
    return true;
    } else if (num2 == 20) {
        return true;
    } else if (num1 + num2 <= 20) {
        return true;
    }
}

console.log( dwadziescia(8, 12) );