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
    [Symbol.iterator](){
        const arr = this.set.slice(); // создаем копию массива
        let index = 0;
        return {
            next: function() {
                if (index < arr.length) {
                    return {
                        value: arr[index++],
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
}

const group = Group.from([22, 23]);
group.add(1);
group.add(2);
group.add(3);
group.add(4);
group.add(4);
for(let el of group){
    console.log(el);
}
