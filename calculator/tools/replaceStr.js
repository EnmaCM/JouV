"use strict";
let logReplaceStr = new customConsole();
logReplaceStr.isOn = true;

function replaceStr(start,end,buffer,str) {

  let newStr = "";
  let theStr = `${str}`;
 

  console.warn(buffer,"buffer");
  for(let i = 0; i < start; i++) {
    newStr += buffer[i];
    logReplaceStr.log(newStr);
  }
  for(let i = 0; i < theStr.length;i++) {
    newStr += theStr[i];
    logReplaceStr.log(newStr);
  }
  for(let i = end; i < buffer.length;i++) {
    newStr += buffer[i];
  }
  return newStr;
}