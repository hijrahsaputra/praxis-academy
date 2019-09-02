// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!!!';

// Single line comment
/*
This is a multi-line comment
Everything in between is a comment
*/


// let iceCream = 'chocolate';
// if (iceCream==='chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awww, but chocolate is my favorite...');
// }

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'PraxisAcademy is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'PraxisAcademy is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


// function multiply(num1,num2){
// let result = num1 * num2;
// return result;
// }


// document.querySelector('html').onclick = function(){
//     alert('Ouch!..stop poking me!!');
// }