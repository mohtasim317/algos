/*
You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

Sample Input
js
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"
Sample Output
js
true
*/

function document(available, document) {
  let dictionary = {};

  for (let char of available) {
    dictionary[char] ? dictionary[char]++ : (dictionary[char] = 1);
  }

  for (let char of document) {
    if (dictionary[char]) {
      dictionary[char]--;
      if (dictionary[char] === 0) {
        delete dictionary[char];
      } else if (dictionary[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

// let characters = "111Bste!hetsi ogEAxpelrt";
// let a = "AlgoExpert is the Best!";

let characters = "a a";
let a = " aaz";

console.log(document(characters, a));
