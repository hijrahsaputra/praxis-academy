// function* generator(i) {
//     yield i;
//     yield i + 5;
// }
// var gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);

//RESULT
//Hijrahs-MacBook-Pro:latihan hj$ node generator.js 
//10
//15

// function* idMaker() {
//     var index = 0;
//     while (true)
//         yield index++;
// }

// var gen = idMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3

// function* anotherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//     yield i + 3;
// }

// function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
// }

// var gen = generator(10);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20

function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise