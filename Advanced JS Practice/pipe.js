// Sum 2 to n
const sumTwo = n => {
    return n + 2;
}

// Multiply 2 to n
const multiplyTwo = n => {
    return n * 2;
}

console.log(multiplyTwo(sumTwo(1))); // 6
//Generalize the result: encapsulating in a pipe function.

const pipe = (funA, funB) => (arg) => funB(funA(arg));
const result = pipe(sumTwo, multiplyTwo)(1);
console.log(result); // 6