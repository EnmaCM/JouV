"use strict";


function operationController(a,b,mathSimbol) {
    console.log(a,b,"operationController");
  
    if(mathSimbol === "/") {
      return divide(a,b); //Last and next number
    }
    if(mathSimbol === "*") {
      return multiply(a,b);
    }
    if(mathSimbol === "+") {
      return add(a,b);
    }
    if(mathSimbol === "-") {
      return substract(a,b);
    }
    else{
      return false;
    }
}

function add(a,b) {
  console.log(a+b,"add");
  return a + b;
}

function substract(a,b) {
  console.log(a-b,"add");
  return a - b;
}
function multiply(a,b) {
  console.log(a*b,"add");
 return a * b;
}

function divide(a,b) {
  return a === 0 ? false: a / b;
}
