/*
First Non-Repeating Character
Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that occurs only once.

If the input string doesn't have any non-repeating characters, your function should return -1.

Sample Input
string = "abcdcaf"
Sample Output
1 // The first non-repeating character is "b" and is found at index 1.f
*/

// const nonRepeatingChar = (s) => {
//   for (let i = 0; i < s.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < s.length; j++) {
//       if (i !== j && s[i] === s[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) return i;
//   }
//   return -1;
// };

// const nonRepeatingChar = (s) => {
//   const map = {};

//   for (let char of s) {
//     map[char] ? map[char]++ : (map[char] = 1);
//   }

//   for (let char in map) {
//     if (map[char] === 1) return s.indexOf(char);
//   }

//   return -1;
// };

const nonRepeatingChar = (s) => {
  const map = {};

  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }

  return -1;
};

console.log(nonRepeatingChar("aaagg"));
console.log(nonRepeatingChar("asdijl"));
console.log(nonRepeatingChar("addas"));
