/**
 * Metode yang digunakan untuk mengambik string diantara awal dan akhir indek yang ditentukan atau akhir indeks yang ditentukan
 * str.substring(indexStart[, indexEnd])
 * fungsi lain yang dapat digunakan adalah substr() merupakan fungsi terdahulu dari substring tetapi masih digunakan
 */

var str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"