const prompt = require('prompt-sync')();

const userName = prompt('Пожалуйста, введите ваше имя: ');

console.log(`\nПриветствуем, ${userName || 'Гость'}!`);
