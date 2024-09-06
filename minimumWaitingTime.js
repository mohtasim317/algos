// function minimumWaitingTime(array) {
//   array.sort((a, b) => a - b);

//   let prevSum = 0;
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += prevSum;
//     prevSum += array[i];
//   }

//   return sum;
// }

function minimumWaitingTime(array) {
  array.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i] * (array.length - (i + 1));
  }

  return sum;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
console.log(minimumWaitingTime([1, 4, 5]));
