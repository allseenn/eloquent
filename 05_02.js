function loop(val, test, update, body){
    while(test(val)){
        body(val);
        val = update(val);
    }
}

loop(0, t => t <= 3, u => u+1, console.log)