/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Sample Input
array = [1, 2, 3, 5, 6, 8, 9]
Sample Output
[1, 4, 9, 25, 36, 64, 81]

*/

const sortedSquaredArray = (arr) => {
  let result = [];

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (Math.abs(arr[left]) >= Math.abs(arr[right])) {
      result = [arr[left] * arr[left], ...result];
      left++;
    } else if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      result = [arr[right] * arr[right], ...result];
      right--;
    }
  }

  return result;
};

console.log(sortedSquaredArray([-9, -5, -4, -2, 4, 4, 6, 7]));
