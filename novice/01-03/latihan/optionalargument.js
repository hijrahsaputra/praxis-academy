function power(base, exponent = 4) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(2, 6));

  // Optional argument secara default adalah 4, tetapi bisa diganti pada saat pemanggilan