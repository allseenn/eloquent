// "use strict";

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for(;;){
    try {
        return primitiveMultiply(a, b);
    }
    catch (e) {
        if(e instanceof MultiplicatorUnitFailure) 
            console.log(`Привет и пока ошибка: ${e}`);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64