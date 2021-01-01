"use strict";

function insertMultiplySymbols(buffer) {
  
  let newBuffer = buffer;
  let sizeAdded = 1;

  for (let i = 0; i < buffer.length; i++) {
    
    if (buffer[i] === "(" && (isFinite(buffer[i - 1]) || buffer[i - 1] === ")" )) {
      newBuffer =  insertStr(newBuffer,"*",i - 1 + sizeAdded,false);
      sizeAdded++;

    } else if(buffer[i] === ")" && isFinite(buffer[i + 1])) {
        newBuffer =  insertStr(newBuffer,"*",i + sizeAdded,false);
        sizeAdded++;
    }
    }
  
  return newBuffer;
}