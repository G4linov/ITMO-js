function isDigitSimple(func_dig) {
    for (let i = 2; i < (func_dig - 1); i++) {
        if (func_dig % i == 0) {
            return "Не простое";
        }
    }
    return "Простое";
}

let k = 0;

for (let i = 0; i <= 7290; i++) {
    if (isDigitSimple(i) == "Простое") {
        k++
    }
}