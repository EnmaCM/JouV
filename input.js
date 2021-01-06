"use strict";
let buffer = ''; //Store all the expression



function input(value,...rest){

  let bufferCopy = buffer;
  let bufferLength = buffer.length - 1;

  if(isFinite(value) && value !== null){
    value = value.toString(); 
    logInput.log("<-------------Input first check---------->");
  } 
  let special = value === "/" || value ==="*" || value === "-" || value === "+" || value == '.';  
  let replace = false;

  if(special) {

    logInput.log("<--------Input is a special character-------->");
    logInput.log("Processing...")

    value = value === buffer[bufferLength] ? false:value;//Check if the last simbols is diferent to the current
    //If they are the same simbols then value is false

      if(value === "/" && buffer[bufferLength] === "*" ) {
        replace = true;
      }
      else if(value === "*" && buffer[bufferLength] === "/"){
        replace = true;
      }
      else if(value === "+" && buffer[bufferLength] === "-" ||
               (value === "-" && buffer[bufferLength] === "+")) 
        {
          value = "-"; // If a positive and negative simbol are together, always will be result negative
          replace = true;
        }
  }

    let green = false;
    
    if(rest[0] === "delete-all") buffer = cleanBuffer(buffer);
    else if(value) buffer = replace === false ? addToBuffer(buffer,value):replaceLastChar(buffer,value);
    else if(rest[0] === "backspace") buffer = removeFirstChar(buffer);
    else if(rest[0] === "equal") buffer = controller(buffer);
    if(buffer !== bufferCopy && rest[0] === "equal") {
      green = true;
    }

    return rest[0] === "backspace"?CALC_print(buffer,true):CALC_print(buffer,false,green);

}




