//  Rules for pure function:
// 1) The same input always gives the same output.
// 2) No side effects (no mutations)

//impure example 1 :
let x=1;
const increment =() => x+=1;
console.log(increment());
console.log(x);
//impure example 2:
const myArray =[1,2,3];
const addToArray = (array,data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray,4));
console.log(myArray);

//refactored example 1:
const pureIncrement =(num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

//refactored example 2:
const pureAddToArray = (array,data) => [...array,data];
console.log(pureAddToArray(myArray,5));
console.log(myArray);