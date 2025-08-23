function calc(x, action, y){                                                                                        
return action(x, y);                                                                                              
}
                                                                                                                   
function minus(x,y){
    return x-y;
}

console.log(calc(5, minus, 1))
