var people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
];
//In a imperative JavaScript way, it would be:
// var peopleSentences = [];

// for (var i = 0; i < people.length; i++) {
//     var sentence = people[i].name + " is " + people[i].age + " years old";
//     peopleSentences.push(sentence);
// }

// console.log(peopleSentences);

//In a declarative JavaScript way, it would be:
const makeSentence = (person) => `${person.name} is ${person.age} years old`;

const peopleSentences = (people) => people.map(makeSentence);

console.log(peopleSentences(people));
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']

//Wow. So beautiful!
let values = [1, 2, 3, -4, 5];
const updateListMap = (values) => values.map(Math.abs);
console.log(updateListMap(values));