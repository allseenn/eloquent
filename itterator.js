const myIterable = {
  data: [1, 2, 3, 4],

  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
      if(index < this.data.length){
        return { value: this.data[index++], done: false };
        } else {
        return { done: true };
        }
      }
    }
  }
}

console.log(myIterable[Symbol.iterator]().next());
console.log(myIterable[Symbol.iterator]().next());
console.log(myIterable[Symbol.iterator]().next());

/*for(el of myIterable){
    console.log(el)
} */
