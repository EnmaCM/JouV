"use strict";


class Parentheses{



  constructor(open,close,_importance){
    this.openIndex = open;
    this.closeIndex = close;
    this._importanceLevelZeroHigh = _importance;
 
  }
  get group(){
    return [this.openIndex + 1, this.closeIndex - 1];
  }
  get importance(){
    return this._importanceLevelZeroHigh * 10;
    
  }
  
}


function findParentheses(buffer) {
  let opens = [];
  let parentheses = [];
  let foundOpens,foundCloses;
  foundOpens = 0;
  foundCloses = 0;

  for(let i = 0; i < buffer.length ; i++) {

    if(buffer[i] === "(") {
      opens.push(i);
      foundOpens++;

    } else if(buffer[i] == ")") {
      
      foundCloses++;
      parentheses.push(new Parentheses(opens[opens.length - 1],i,opens.length - 1));
      opens.pop();
    }
  }
  if(foundCloses !== foundOpens) return {found: false,err: true,message: "Check the Parentheses"};
  if(foundOpens === 0) return {found:false,err: false,message: "No Parentheses"};


  return {found: parentheses,err: false,message: "Found!"};
}





function findSimbols(buffer,simbols){
  let found = [];
   
      for(let charIndex = 0; charIndex < buffer.length; charIndex++) {
        for(let char of simbols){

          if(buffer[charIndex] === char){

            found.push({character: char,index: charIndex});
          } 
        
        }
      }
      console.warn("findSimbols(): at line 67: found");
      console.table(found);
      if(found[0] === undefined) return {notFound:true,message:"Theres not any operator!",found:null};
      return {notFound:false,found:found,message:"al right"};   
}



function findSimbolsOfOperations(buffer,simbols) {
  let found = [];
   
  for(let charIndex = 0; charIndex < buffer.length; charIndex++) {
    
    for(let char of simbols){

      if(buffer[charIndex] === char) {        
        if(char === "-" && (buffer[charIndex - 1] === "/" || buffer[charIndex - 1] === "*")) {
          continue;
        } else {
          found.push({character: char,index: charIndex});
        }
      } 
    
    }
  }
  console.warn("findSimbols(): at line 67: found");
  console.table(found);

  if(found[0] === undefined) return {notFound:true,message:"Theres not any operator!",found:null};
  return {notFound:false,found:found,message:"al right"};   
}



function findFirstSymbol(buffer,listOfSymbols) {
  let found = [];

  for(let charIndex = 1; charIndex < buffer.length; charIndex++) {
    for(let char of listOfSymbols){
      if(buffer[charIndex] === char) return ({character: char,index: charIndex,notFound: false});
    }
  }
  return {notFound: true, message: "symbols not found: findFirstSybol()"};
}