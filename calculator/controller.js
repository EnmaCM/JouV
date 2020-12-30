"use strict";
let bufferHistory = new $History();




function controller(buffer) {
  let symbols = ["/", "*", "-", "+"];
  let bufferCopy = buffer;

  if (checkIfGoodFormated(buffer, symbols) === false) {
    logController.warn("Not good formated: returning the origianl bufffer :controller()");
    return buffer;
  }

  logController.log("Good formated!");

  if (bufferHistory.lastBufferAdded !== buffer) {
    bufferHistory.addToHistory(buffer);
  }


  if (bufferCopy[0] !== "+" && bufferCopy[0] !== "-") {
    bufferCopy = prependPlusSimbol(bufferCopy);
  }

  logController.warn("Buffer $History: controller()");
  logController.table(bufferHistory.buffers);
  let parentheses = findParentheses(bufferCopy).found;
  let insideParenthesesBuffer = "";
  let parenthesesResolved;

  parentheses = sortArrByProperty(parentheses, "importance");
  logController.warn("sorted!");
  logController.table(parentheses);
  logController.log("length : ", parentheses.length);
  let bufferCopyCopy = bufferCopy;


  // for(let i = parentheses.length; i > 0; i--) {

  //   logController.warn("for loop");
  //   logController.log(bufferCopy);

  //   insideParenthesesBuffer =  copyStrFrom(parentheses[i-1].openIndex + 1,parentheses[i-1].closeIndex,bufferCopyCopy);
  //   logController.log(insideParenthesesBuffer,"insede parentheses");

  //   parenthesesResolved = solveMathExpression(insideParenthesesBuffer,symbols);

  //   logController.warn(parenthesesResolved,"resolved");
  //   logController.log(parentheses[i-1].openIndex,parentheses[i-1].closeIndex,"paren");
  //   logController.warn(bufferCopy,"bufferCopy");  

  //   bufferCopy = replaceStr(parentheses[i-1].openIndex,parentheses[i-1].closeIndex + 1,bufferCopy,parenthesesResolved);
  //   logController.warn(bufferCopy,"bufferCopy");

  //    let resolved = `${parenthesesResolved}`;

  //   if(bufferCopy[1] === "-" || bufferCopy[1] === "+" || bufferCopy[1] === "(") {
  //      bufferCopy = removeFirstCharStr(bufferCopy);
  //  }
  //   logController.warn(bufferCopy,"bufferCopy");

  // }
  //solveMathExpression(bufferCopy)
  
  logController.error("<-----------------Start-------------->");

  if (parentheses.length === 0 || parentheses.length === undefined) {
    //bufferCopy = removeFirstCharStr(bufferCopy);
    bufferCopy += ")";
    let temporal = "+(";
    for (let char of bufferCopy) {
      temporal += char;
    }
    bufferCopy = temporal;
    parentheses = findParentheses(bufferCopy).found;
    parentheses = sortArrByProperty(parentheses, "importance");
  }



  logController.error("<-------Start paren------>")
  for (let i = parentheses.length; i > 0; i--) {

    parentheses = findParentheses(bufferCopy).found;
    parentheses = sortArrByProperty(parentheses, "importance");

    logController.warn("for loop");
    logController.log(bufferCopy);

    insideParenthesesBuffer = copyStrFrom(parentheses[parentheses.length - 1].openIndex + 1, parentheses[parentheses.length - 1].closeIndex, bufferCopy);
    logController.log(insideParenthesesBuffer, "insede parentheses");

    parenthesesResolved = solveMathExpression(insideParenthesesBuffer, symbols);

    logController.warn(parenthesesResolved, "resolved");
    logController.log(parentheses[i - 1].openIndex, parentheses[i - 1].closeIndex, "paren");
    logController.warn(bufferCopy, "bufferCopy");

    bufferCopy = replaceStr(parentheses[parentheses.length - 1].openIndex - 1, parentheses[parentheses.length - 1].closeIndex + 1, bufferCopy, parenthesesResolved);
    logController.warn(bufferCopy, "bufferCopy");



    if (bufferCopy[1] === "-" || bufferCopy[1] === "+" || bufferCopy[1] === "(") {
      bufferCopy = removeFirstCharStr(bufferCopy);
    }
    logController.warn(bufferCopy, "bufferCopy");

  }

  return bufferCopy;
}


function solveMathExpression(buffer, symbols) {


  let newBuffer = buffer;
  let foundSymbols = resolveExpression(buffer, symbols).foundSymbols.found;
  let result;

  for (let i = 0; i < foundSymbols.length - 1; i++) {

    result = resolveExpression(newBuffer, symbols);
    if (result.result === false) break;

    newBuffer = joinStr(result.result, buffer, foundSymbols[i + 1].index + 1);
    logController.warn(newBuffer, "new buffer");
  }
  //return cleanBuffer(buffer);
  return result.result;
}



function resolveExpression(buffer, simbols) {

  let bufferCopy = buffer;
  if (bufferCopy[0] !== "+" && bufferCopy[0] !== "-") {
    bufferCopy = prependPlusSimbol(bufferCopy);
  }

  let foundSymbols = findSimbolsOfOperations(bufferCopy, simbols);
  logResolveExp.warn(bufferCopy, "buffer copy : resolveExpressions()");

  return { result: doMaths(foundSymbols.found, bufferCopy, 1), foundSymbols: foundSymbols };

}

function doMaths(listOfSymbols, theBuffer, operatorIndex) {

  let expressions = findExpression(operatorIndex, theBuffer, listOfSymbols);
  if (expressions.notFound) {
    return false;
  }
  let numbers = expressions.toNumber(theBuffer);
  return operationController(numbers[0], numbers[1], expressions.operation.character);

}

function joinStr(textTojoin, target, fromIndex) {

  let bufferStr = "";
  bufferStr += textTojoin;
  logJoinStr.warn(bufferStr, "bufferStr");
  logJoinStr.warn(target, "target");

  for (let char = fromIndex; char < target.length; char++) {
    bufferStr += target[char];
    logJoinStr.log(bufferStr, "buffer str")
  }
  logJoinStr.warn(bufferStr, "bufferStr");
  return bufferStr;
}








