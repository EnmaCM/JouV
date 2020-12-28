"use strict";
//20 element on screen max


function removeFirstChar(buffer){

  let myStr = "";
  logBuffer.log("<----removing first char---->")
  for(let char = 0; char < buffer.length - 1; char++) {
     myStr += buffer[char];
     logBuffer.log(char,"char index");
  }
  buffer = myStr;
  return buffer;
}

function cleanBuffer(buffer) {
  buffer = "";
  return buffer;
}

function addToBuffer(buffer,str) {

  if( str !== null) {
    buffer += str;
    logBuffer.log(str + " Is not null");
    logBuffer.log("<--- Added to buffer---->");
  } 
    
  buffer.toString();
  
  return buffer;
}

function replaceLastChar(buffer,str){
 
  let myStr = "";

  for(let char = 0; char < buffer.length - 1; char++) {
     myStr += buffer[char];
     logBuffer.log(char);
  }
  myStr += str;
  buffer = myStr;
  return buffer;
   //str is the new value for the last position on buffer
}
