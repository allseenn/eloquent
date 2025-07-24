let counter = 0; // объявляем переменную counter
const amount = 100000; // объявляем переменную amount

const timerId = setInterval(() => {
  if (counter > amount) {
    clearInterval(timerId);
    console.log('End long calculations');
  }
  if (counter % 10000 === 0) {
    console.log('working: ', counter);
  }
  const newDate = new Date(counter);
  counter++;
}, 0);
