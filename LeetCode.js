var createCounter = function (n) {
  let counterNum = n;
  return function () {
    let value = counterNum;
    counterNum++;
    return value;
  };
};
let n = 10;
const counter = createCounter(n);
counter();

// function createCounter(n) {
//   let counterValue = n;

//   function counter() {
//     let currentValue = counterValue;
//     counterValue++;
//     return currentValue;
//   }

//   return counter;
// }

// // Example usage:
// let n = 10;
// let counter = createCounter(n);

// // Calling the counter function multiple times
let output = [counter(), counter(), counter()];
console.log(output); // Output: [10, 11, 12]
