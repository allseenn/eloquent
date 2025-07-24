function deepEqual(val1, val2){
    if (typeof(val1) == 'object'){
        if (val1 == null || val2 == null) return val1 == val2;
        if (Object.keys(val1).length != Object.keys(val2).length) return false;
        for (let key in val1){
            if (!deepEqual(val1[key], val2[key])) return false;
        }
        return true;
    }
    return val1 === val2;
}

// console.log(deepEqual(2, 2));
// console.log(deepEqual(2, 1));
// console.log(deepEqual([1, 2, 3], [1, 2, 3]));
// console.log(deepEqual([1, 2, 3], [1, 2, 4]));
// console.log(deepEqual(null, null));
// console.log(deepEqual({}, null));
// console.log(deepEqual({hello: 'world'}, {hello: 'world'}));
// console.log(deepEqual({hello: 'world'}, {hello: 'worldd'}));
// console.log(deepEqual('world', 'world'));
// console.log(deepEqual('world', 'worldd'));
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true