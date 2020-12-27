"use strict";

function prependPlusSimbol(buffer){
  let newStr = '+';
  for(let char of buffer) {
    newStr += char;
  }
  return newStr;
} 

function removeFirstCharStr(str){
  let newStr = '';

  for(let char = 1; char < str.length; char++) {
    newStr += str[char];
  }
  return newStr;
}