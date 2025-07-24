const lastName = "Petrov"
// lexical env: { lastName: "Petrov" }
function getFullName(firstName) {
    // lexical env: { lastName: "Petrov", firstName: <будет определено в момент запуска функции> }
    const fullName = firstName + " " + lastName;
    // lexical env: { lastName: "Petrov", firstName: <будет определено в момент запуска функции>, fullName: <будет вычислено в момент запуска функции> }
    return fullName;
}

getFullName("Ivan"); // "Ivan Petrov"
// lexical env в момент вызова стал таким: { lastName: "Petrov", firstName: "Ivan", fullName: "Ivan Petrov" }