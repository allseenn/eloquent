// https://stackoverflow.com/questions/56160350/eloquent-javascript-persistent-group

class PGroup {
  #members;
  constructor(members) {
    this.#members = members;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.#members.concat([value]));
  }
  toString(){
      let string = "["
      for(let i = 0; i < this.#members.length; i++){
          string += this.#members[i];
          if(i != this.#members.length-1) string += ', '
          else string+= "]"
      }
      return string
  }
  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.#members.filter(m => m !== value));
  }

  has(value) {
    return this.#members.includes(value);
  }

  static empty = new PGroup([]);
}

let a = PGroup.empty.add("a").add("b");
let ab = a.add("b");
let b = ab.delete("a");
let c = PGroup.empty.add("c");
console.log(c.has("c"));
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
console.log(a.toString());
console.log(c);