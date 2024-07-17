// var createCounter = function (n) {
//   let counterNum = n;
//   return function () {
//     let value = counterNum;
//     counterNum++;
//     return value;
//   };
// };
// let n = 10;
// const counter = createCounter(n);
// counter();

// // function createCounter(n) {
// //   let counterValue = n;

// //   function counter() {
// //     let currentValue = counterValue;
// //     counterValue++;
// //     return currentValue;
// //   }

// //   return counter;
// // }

// // // Example usage:
// // let n = 10;
// // let counter = createCounter(n);

// // // Calling the counter function multiple times
// let output = [counter(), counter(), counter()];
// console.log(output); // Output: [10, 11, 12]

console.log(Date.now());
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
console.log(Math.round(Date.now()));

function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}
