
# JavaScript basics
Membuat HTML + JS Basic

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript basics - Learn web development | MDN</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">PraxisAcademy is cool</h1>
            <img src="images/firefox-icon.png" alt="The Firefox logo: a flaming fox surrounding the Earth." class="img-fluid">
            <p>At Bima Hacker Village, we're a global community of</p>

            <ul>
                <li>Python</li>
                <li>Full Stack Developer</li>
                <li>Front End Developer</li>
            </ul>

            <p>
                working together to keep the Internet alive and accessible, so people worldwide can be informed
                contributors and
                creators of the Web. We believe this act of human collaboration across an open platform is essential to
                individual growth and our collective future.
            </p>

            <p>Read the <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a> to learn even
                more about
                the values and principles that guide the pursuit of our mission.</p>

            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                unique.</p>
            <p><button type="button" class="btn btn-primary">Change User</button></p>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="script/main.js"></script>
</body>

</html>
```

**JS CODE :**
```javascript
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

// Image Switch

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}

// Pesan

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
```

**RESULT**
![](https://github.com/hijrahsaputra/images/blob/master/basic.png)

# eloquentjavascript.net

 1. **Looping a triangle**
	  Tulis satu loop yang membuat tujuh panggilan ke console.log untuk menghasilkan segitiga berikut:
    ``` 
    #
    ##
    ###
    ####
    #####
    ######
    ####### 
    
    ```
    **JS Code :** 
    ```javascript
    for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
    ```
    **RESULT**
    ![](https://github.com/hijrahsaputra/images/blob/master/triangle.png)
    
 2. **FizzBuzz**
	  Tulis program yang menggunakan console.log untuk mencetak semua angka dari 1 hingga 100,dengan dua pengecualian. 
    Untuk angka yang dapat dibagi dengan 3, cetak "Fizz", bukan angka,dan untuk angka yang dapat dibagi 5 (dan bukan 3), 
    cetak "Buzz". Ketika Anda berhasil, modifikasi program Anda untuk mencetak "FizzBuzz" untuk angka yang dapat dibagi 
    oleh 3 dan 5 (dan masih cetak "Fizz" atau "Buzz" untuk angka yang hanya dapat dibagi oleh salah satu dari mereka).
  
    **JS Code :** 
    ```javascript
    for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
    }
    ```
    **RESULT**
    ![](https://github.com/hijrahsaputra/images/blob/master/buzz.png)
    
 3. **Chessboard**
    Tulis program yang membuat string yang mewakili grid 8 × 8, menggunakan karakter baris baru untuk memisahkan baris. 
    Di setiap posisi kisi ada karakter spasi atau `#`. Karakter harus membentuk papan catur.
    
    **JS Code :**
    ```javascript
    let size = 8;
    let board = "";
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
        { 
        board += " ";
        } 
        else 
        {
        board += "#";
        }
     } 
    board += "\n" 
    } 
    console.log(board);
    ```
    
    **RESULT**
    ![](https://github.com/hijrahsaputra/images/blob/master/chesse.png)
   
