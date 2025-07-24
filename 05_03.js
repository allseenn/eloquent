function every1(arr, f){
    for(let i=0; i < arr.length; i++){
        if(f(arr[i]) == false) return false;
    }
    return true
}

console.log(every1([1, 2, 3, 4, -5], n => n > 0));

function every2(arr, f){
    return arr.map(e => -e).some(f);
}

console.log(every2([1, 2, 3, 4, 5], n => n > 0));