function* generator(i) {
    yield i;
    yield i + 5;
}
var gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
