"use strict";

// let buffers = [];


// function addToHistory(str){
//   buffers.push(str);

//   if(buffer.length > 10) {
//     let newBuffer = [];
//     for(let i = 5; i < 10; i++) {
//       newBuffer.push(buffers[i]);
//     }
//     buffers = newBuffer;
//   }
// }

class $History{

  #buffers = [];

 
  addToHistory(str){
    this.#buffers.push(str);

    if(this.#buffers.length > 10) {
      this.#removeFromBuffer(0,5);
    }
  }

  #removeFromBuffer(from,amount){
    let newBuffer = [];
    for(let i = from; i < amount; i++) {
      newBuffer.push(this.#buffers[i]);
    }
    this.#buffers = newBuffer;
  }
   
  get buffers(){
    return this.#buffers;
  }
  get lastBufferAdded() {
    return this.#buffers[this.#buffers.length - 1] === undefined ? null : this.#buffers[this.buffers.length - 1];
  }

}

