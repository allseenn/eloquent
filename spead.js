function sum(a, b, c) {
    const args = [...arguments];
    console.log(args);
    console.log(arguments);
}

sum(1, 2, 3);
