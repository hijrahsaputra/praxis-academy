let people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
];

const olderThan21 = person => person.age > 21;
const overAge = people => people.filter(olderThan21);
console.log(overAge(people)); // [{ name: 'TK', age: 26 }, { name: 'Kazumi', age: 30 }]