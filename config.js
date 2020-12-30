"use strict";

/* dont change anything but the boolen if you want to disable or enable a custom console */

let config = {
  development : true,
  logInput : false, 
  logBuffer : false, 
  logController : true, 
  logSolveExp : false, 
  logResolveExp : false, 
  logJoinStr : false,
  logDoMath : true, 
  logFindExp : true, 
  logToNumber : true,
  logOutput : false
}

/*<------Don't touch anything bellow here-------->*/





//keep the order as in "config",please note the "s" at the end
let customsConsoles = { 

  logInput: null,
  logBuffer: null ,
  logController: null,
  logSolveExp: null,
  logResolveExp: null,
  logJoinStr: null,
  logDoMath: null,
  logFindExp: null,
  logToNumber: null,
  logInput : null
};


if(!config.development) {
  development(false); //disable all consoles log even the custom ones exect the named "important" -> console.important
}

for(let element in config) {

  if(config[element] && element !== "development") {
    customsConsoles[element] = new customConsole();

  } else if(element !== "development" && config[element] === false){
    customsConsoles[element] = new customConsole(false);
  }
}

//is ()=>null or a customConsole object, see the for loop above
let logInput = customsConsoles.logInput;
let logBuffer = customsConsoles.logBuffer;
let logController = customsConsoles.logController;
let logSolveExp = customsConsoles.logSolveExp;
let logResolveExp = customsConsoles.logResolveExp;
let logJoinStr= customsConsoles.logJoinStr;
let logDoMath = customsConsoles.logDoMath;
let logFindExp = customsConsoles.logFindExp;
let logToNumber = customsConsoles.logToNumber;
let logOutput = customsConsoles.logOutput;