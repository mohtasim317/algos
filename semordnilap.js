// function semordnilap(words) {
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i] === words[j].split("").reverse().join("")) {
//         result.push([words[i], words[j]]);
//       }
//     }
//   }

//   return result;
// }

function semordnilap(words) {
  const result = [];
  const map = {};

  for (let i = 0; i < words.length; i++) {
    let rev = words[i].split("").reverse().join("");
    if (map[rev]) {
      result.push([words[i], rev]);
      delete map[rev];
    } else {
      map[words[i]] = true;
    }
  }

  return result;
}

console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
console.log(semordnilap(["diaper", "aabc", "test", "cba", "repaid"]));
console.log(semordnilap(["diaper", "abdc", "test", "cdba", "repaid"]));
console.log(semordnilap(["diaper", "abc", "test", "cba", "repaid"]));
console.log(semordnilap(["", "abc", "test", "cba", ""]));
console.log(semordnilap(["a", "abc", "test", "cba", "a"]));
console.log(semordnilap([" ", "abc", "test", "cba", " "]));
