

function development(value){
  if(!value){
    console.important = console.log();
    console.log = (...rest)=>null;
    console.warn = (...rest)=>null;
    console.table = (...rest)=>null;
    console.trace = (...rest)=>null;
    console.error = (...rest)=>null;
  }
}

class customConsole{

  #log = console.log;
  #warn = console.warn;
  #table = console.table;
  #trace = console.trace;
  #debug = console.debug;
  #count = console.count;
  #endCount = console.countReset;
  #group = console.group;
  #endGroup = console.groupEnd;
  #error = console.error;
  properties = ["log","warn","table","trace","debug","count","countReset","group","endGroup"];

  constructor(id){
    if(id) {
      this.id = id;
    }
    else{
      this.id = null;
    }
    this.log = this.#log;
    this.warn = this.#warn;
   this.table =  this.#table;
    this.trace = this.#trace;
    this.debug = this.#debug;
    this.count = this.#count;
    this.endCount = this.#endCount;
    this.group = this.#group;
    this.endGroup = this.#endGroup;
    this.error = this.#error;
  
  }
  set isOn(value){
    
    if(value) {
          
      this.log = this.#log;
      this.warn = this.#warn;
     this.table =  this.#table;
      this.trace = this.#trace;
      this.debug = this.#debug;
      this.count = this.#count;
      this.endCount = this.#endCount;
      this.group = this.#group;
      this.endGroup = this.#endGroup;
    }
    else if(value === false){
      for(let element of this.properties){
        this[element] = (...rest)=>null;
        this.error = this.#error;

      }
    }
     
  }
}

