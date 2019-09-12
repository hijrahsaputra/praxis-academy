function volume2(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}
const aCylinder = volume2(100)(20)(90);
console.log(aCylinder);


//Currying and Partial Function Application
function volume(l) {
    return (w, h) => {
        return l * w * h
    }
}

console.log(volume(70)(90, 30));
console.log(volume(70)(390, 320));
console.log(volume(70)(940, 340));