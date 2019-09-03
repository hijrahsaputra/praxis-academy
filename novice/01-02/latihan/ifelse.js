console.log("Latihan Percabangan IF..ELSEIF");
console.log("------------------------------");
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Silakan memilih percabangan ? ", (answer) => {
    if (answer === '1') {
        console.log("Pilihan 1");
    } else if (answer === '2') {
        console.log("Pilihan 2");
    } else if (answer == '3') {
        console.log("Pilihan 3");
    } else {
        console.log("Pilihan Salah");
    };
    r1.close();
});
