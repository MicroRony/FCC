function reusableFunction() {
  console.log('Hi World');
}

reusableFunction();

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}

functionWithArgs(2, 3);

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  'use strict';

  // Only change code below this line
var myVar = 50;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = 'sweater';


  // Only change code above this line
  return outerWear;
}

myOutfit();

function timesFive(n) {
  return n * 5;
}

var answer = timesFive(5);

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
sum =  sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

