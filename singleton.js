class Singleton {
  static instance = null;
  
  static getInstance(){
    if(!this.instance){
      this.instance = new Singleton();
    }
    return this.instance;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true
