function range(start, end, step = 1){
    const arr = [];
    if(step> 0){
        for(let i = start; i <= end; i+=step){
            arr.push(i);
        }   
    } else {
        for(let i = start; i >= end; i+=step){
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = (questionText) => {
    return new Promise((resolve) => {
        readline.question(questionText, resolve);
    });
};

(async () => {
        let start = await getInput('start: ');
        let end = await getInput('end: ');
        let step = await getInput('step: ');

        start = Number(start);
        end = Number(end);
        step = Number(step);
        
        console.log(`Диапазон: ${range(start, end, step)} имеет сумму ${sum(range(start, end, step))}`);
        readline.close();
})();

