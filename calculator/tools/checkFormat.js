"use strict";
let printf = new customConsole();
printf.isOn = true;

function checkIfGoodFormated(buffer,simbols) {

  if(typeof(buffer) === "number") return false; 
  if(buffer[0] !== "+" && buffer[0] !== "-") {
    buffer = prependPlusSimbol(buffer);
  }
  let foundSymbols = findSimbols(buffer,simbols);

  if(foundSymbols.notFound) {
    printf.log("Input Error: " + foundSymbols.message);
    return false;
  }
 
  let foundParentheses = findParentheses(buffer);

  if(foundParentheses.err) {
    printf.log("Input Error: " + foundParentheses.message);
    return false;
  }

  let foundExpressions = findExpression(1,buffer,foundSymbols.found);

  if(foundExpressions.notFound) {
    printf.log("Input Error: " + foundExpressions.message);
    return false;
  }
  return true;
}

