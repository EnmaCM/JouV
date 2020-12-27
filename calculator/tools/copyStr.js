"use strict";


function copyStrFrom(from,end,str) {
  let newStr = "";

  for(let char = from; char < end; char++) {
    newStr += str[char];
  }
  return newStr;
}

