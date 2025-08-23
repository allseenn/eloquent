const zero = x => {
    if(x == 0) return 0;
    //return x+=zero(x-1);
    return zero(x-1)+x;
}

console.log(zero(4));
