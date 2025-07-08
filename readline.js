const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ваше имя? ', name => {
  console.log(`Привет, ${name}!`);
  readline.close();
});
