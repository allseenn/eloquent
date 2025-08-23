class Range{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
    *[Symbol.iterator](){
        for(let i = this.start; i <= this.end; i++){
            yield i;
        }
    }
}

const myRange = new Range(1, 5);

for (const num of myRange){
    console.log(num);
}
