function reverse(arr1){
arr2 = [];
    for(let i = arr1.length - 1; i >= 0; i--){
        arr2.push(arr1[i]);
    }
    return arr2;
}

function reverseInPlace(arr){
    arr2 = reverse(arr);
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr2[i];
    }
}

arr = [1, 2, 3, 4, 5];
reverseInPlace(arr);
console.log(arr);




