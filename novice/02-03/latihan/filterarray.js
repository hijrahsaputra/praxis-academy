function smaller(number) {
    return number < this;
}

function filterArray(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
}

let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

console.log(filterArray(3, numbers));