export default class Calculator{

  constructor(a, b){
    this.a = a;
    this.b = b;
  }

  add(){
    return this.a + this.b;
  }

  subtract(){
    return this.a - this.b;
  }

  toString(){
    return this.a + ' ' + this.b;
  }
}
