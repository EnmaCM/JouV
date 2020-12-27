
class InputError extends Error{

  constructor(str){
    super();
    this.name = this.prototype.name;
    this.message = str;
  }
}