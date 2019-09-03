console.log("Latihan Percabangan SWITCH");
console.log("------------------------------");
console.log("1. Oranges");
console.log("2. Apples");
console.log("3. Bananas");
console.log("4. Cherries");
console.log("5. Mangoes");
console.log("6. Mangoes & papayas");
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Silakan memilih jenis buah (1..6) : ? ", (answer) => {
    switch (answer) {
        case '1':
            console.log('Oranges are $0.59 a pound.');
            break;
        case '2':
            console.log('Apples are $0.32 a pound.');
            break;
        case '3':
            console.log('Bananas are $0.48 a pound.');
            break;
        case '4':
            console.log('Cherries are $3.00 a pound.');
            break;
        case '5':
            console.log('Mangoes are $0.56 a pound.');
            break;
        case '6':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
            console.log('Sorry, we are out of ' + answer + '.');
    }
    console.log("Is there anything else you'd like?");
    r1.close();
});
