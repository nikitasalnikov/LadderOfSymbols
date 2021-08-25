do {
    var num1 = +prompt('Введите количество ступеней: ');
} while (isNaN(num1) || num1 <= 0)

do {
    var sym = prompt('Введите символ: ');
} while (sym == '');

do {
    var finalSym = prompt('Введите конечный символ: ');
} while (finalSym == '');

for (let i = 0; i < num1; i++) {
    // finalSym = i == 0 ? finalSym : sym + finalSym;
    // console.log(finalSym);

    if (i == 0) {
        finalSym = finalSym;
        console.log(finalSym);
    } else {
        finalSym = sym + finalSym;
        console.log(finalSym);
    }
}