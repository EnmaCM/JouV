"use strict";

function prependPlusSimbol(buffer){
  return "+" + buffer;
} 

function removeFirstCharStr(str){
  let newStr = '';

  for(let char = 1; char < str.length; char++) {
    newStr += str[char];
  }
  return newStr;
}