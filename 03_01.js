function min(a, b) {
    return a < b ? a : b;
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
        const num1 = await getInput('Число 1: ');
        const num2 = await getInput('Число 2: ');
        
        const a = Number(num1);
        const b = Number(num2);
        
        console.log(`Минимальное число: ${min(a, b)}`);
        readline.close();
})();
