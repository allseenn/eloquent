function isEven(a) {
    if(a < 0) return isEven(-a);
    else if(a == 0) return true;
    else if(a == 1) return false;
    else return isEven(a - 2);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для последовательного ввода
const getInput = (questionText) => {
    return new Promise((resolve) => {
        readline.question(questionText, resolve);
    });
};

// Асинхронная обработка
(async () => {
        const num = await getInput('Число: ');
        
        const a = Number(num);
        
        console.log(`${isEven(a)}`);
        readline.close();
})();
