const createCounter = () => {
  let count = 0;
  return () => {
    console.log(`Scope: ${count}`);
    count++;
    return count;
  };
};

const counter = createCounter();

console.log(counter()); // Scope: 0, returns 1
console.log(counter()); // Scope: 1, returns 2
console.log(counter.toString()); // Scope: 2, returns 3

