function repeat(n, action){
    for (let i=0; i<n; i++) action(i);
}

let labels = [];
repeat(3, i => labels.push(i+1));

console.log(labels);
