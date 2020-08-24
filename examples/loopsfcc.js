// Setup
var myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

// Only change code below this line
// Setup
var myArray = [];
// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}
console.log(myArray);// Setup
var myArray = [];

// Only change code below this line
for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
// Setup
var myArray = [];

// Only change code below this line
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++)
  {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myarray.push(i);
  i++;
} while (i < 10);
console.log(myarray);
