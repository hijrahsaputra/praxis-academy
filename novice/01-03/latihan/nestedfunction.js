function sayHiBye(firstName, lastName) {
    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }
}

console.log(sayHiBye('Hijrah','Saputra'));