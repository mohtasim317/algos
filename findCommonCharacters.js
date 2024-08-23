/*

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 

Constraints:
*/

function commonChars(words) {
  const map = {};

  for (let j = 0; j < words.length; j++) {
    const seen = {};
    for (let k = 0; k < words[j].length; k++) {
      if (seen[words[j][k]]) {
        continue;
      } else {
        map[words[j][k]] ? map[words[j][k]]++ : (map[words[j][k]] = 1);
        seen[words[j][k]] = 1;
      }
    }
  }

  const result = [];

  for (let char in map) {
    if (map[char] === words.length) {
      result.push(char);
    }
  }

  return result;
}
