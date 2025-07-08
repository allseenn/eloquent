function countChar(a, b) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b) {
            count++;
        }
    }
    return count;
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
        const string = await getInput('Введите строку: ');
        const letter = await getInput('Искоамя буква: ');
        
        console.log(`Символ ${letter} встречается ${countChar(string, letter)} раз`);
        readline.close();
})();
