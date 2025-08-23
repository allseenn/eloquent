let id1 = Symbol("test");
let id2 = Symbol("test");
console.log(id1 === id2); // false
console.log(id1.description, id2.description);

const test = Symbol('test1');
const test2 = Symbol('test2');

const obj = {
    [test]: 'testValue',
    [test2]: 'test2'
}


console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))
console.log(obj[test]); 
