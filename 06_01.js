class Vec{
    constructor(x, y){
    this.x = x;
    this.y = y;
    }

    plus(other){
        return new this.constructor(this.x+other.x, this.y+other.y);
    }    

    minus(other){
        return new this.constructor(this.x-other.x, this.y-other.y);
    }

    get length(){
        return (this.x**2+this.y**2)**(1/2);
    }
}

const vec1 = new Vec(5, 5);
console.log(vec1.length);

const vec2 = new Vec(1, 1);
console.log(vec2.length);

console.log(vec1.minus(vec2));
console.log(vec1.plus(vec2));



        
