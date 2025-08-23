class Rabbit{
    constructor(type){
        this.type = type;
    }

    speak(){
        console.log(`My type is ${this.type}`);
    }
}

const whiteRabbit = new Rabbit('White');
whiteRabbit.speak();
whiteRabbit.hight = 50;
console.log(whiteRabbit.hight);
