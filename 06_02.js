class Group{
    constructor(){
        this.set = []
    }

    has(val){
        return this.set.some(el=>el===val);
    }

    add(val){
        if(!this.has(val)) this.set.push(val);
    }

    delete(val){
        if(this.has(val)){
            let index = this.set.indexOf(val);
            this.set.splice(index, index);
            return true;   
        }
        return false;
    }
    
    static from(arr){
        let group = new this;
        for(let i=0; i< arr.length; i++){
            group.add(arr[i]);
            }
        return group;
    }

    toString(){
        let string = "{"
        for(let i = 0; i < this.set.length; i++){
            string += this.set[i];
            if(i != this.set.length-1) string += ', '
            else string+= "}"
        }
        return string
    }
}

const group = Group.from([22, 23]);
group.add(1);
group.add(2);
group.add(3);
group.add(4);
console.log(group.toString());
group.add(4);
console.log(group.toString());
console.log(group.delete(6));
console.log(group.toString());
