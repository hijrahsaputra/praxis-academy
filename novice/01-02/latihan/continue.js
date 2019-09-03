var i = 0;
var n = 0;
console.log("With continue");
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12


var i = 0; 
var n = 0; 
console.log("Without continue");
while (i < 5) { 
  i++; 
  if (i == 3) { 
     // continue; 
  } 
  n += i; 
  console.log(n);
}