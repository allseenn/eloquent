function arrayToList(arr){
list = {};
if(arr.length === 1 ) return {value: arr[0], rest: null};
return {value: arr[0], rest: arrayToList(arr.slice(1))};
}


function listToArray(list) {
    let arr = [];
    while(list){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, index) {
    let num;
    for(let i = 0; i <= index; i++){
        num = list.value
        list = list.rest
    }
    return num
}

function recNth(list, index){
    if(index === 0) return list.value
    if(list.rest === null) return undefined
    return recNth(list.rest, index-1)
}

const spisok = arrayToList([1, 2, 3, 4, 5, 6])
console.log(Object.keys(spisok));
const prepended = prepend(9, spisok);
console.log(listToArray(prepended));
console.log(nth(prepended, -1));
console.log(recNth(spisok, -1));
console.log(listToArray(spisok))
