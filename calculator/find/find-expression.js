"use strict";


function findExpression(operatorIndex,buffer,symbolsPos) {
  //sim is abreviation of Simbols

  let startFirstExpression = symbolsPos[operatorIndex - 1].index;
  let endSecondExpression = symbolsPos[operatorIndex + 1] != undefined? symbolsPos[operatorIndex + 1].index - 1:
  buffer.length - 1;

  logFindExp.warn("findExpression(): symbolPos");
  logFindExp.table(symbolsPos);

  if(symbolsPos[operatorIndex] === undefined) {
    return {err: true,notFound: true,message:"Not any operator: findExpression()"};
  }
  let operator = {index: symbolsPos[operatorIndex].index, character: symbolsPos[operatorIndex].character};
  logFindExp.log(buffer,"Buffer : findExpression:");
  return new Expression(startFirstExpression,operator,endSecondExpression);
  }



  class Expression{


    constructor(startfirstExpression,operation,endSecondExpression){
      
      this.startfirstExpression = startfirstExpression;
      this.operation = operation;
      this.endSecondExpression = endSecondExpression;
      console.log("operation",operation);
    }

    get beforeSimbol(){
      return { start: this.startfirstExpression,
               end:  this.operation.index - 1,
            
      };
    }
    get afterSimbol(){
      return { start: this.operation.index + 1,
               end:  this.endSecondExpression,
               
               
      };
    }

    toNumber(buffer){ 
      let numbers = [];
      let a = "";
      let b = "";

      for(let char = this.beforeSimbol.start; char < this.beforeSimbol.end + 1; char++) {

        a += buffer[char];
       
        logToNumber.log(buffer[char]," <------Buffer[char]--- first number--->");
        logToNumber.log(a,"<<<< a >>>>");
      }
      for(let char = this.afterSimbol.start; char < this.afterSimbol.end + 1; char++) {
        logToNumber.log(buffer)
        b += buffer[char];
        logToNumber.log(buffer[char],"<------Buffer[char]--- second number--->");
        logToNumber.log(b,"<<< b >>>");

      }
    
    
    numbers.push(Number(a));
    logToNumber.warn(a,"a");
    numbers.push(Number(b));
    logToNumber.warn(b,"b");

    logToNumber.warn("<------toNumber------>");
    logToNumber.table(numbers);

    return numbers;
    }
}


