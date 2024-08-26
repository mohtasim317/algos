const runLengthEncoding = (s) => {
  let result = "";
  let prev = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev) {
      count++;
      prev = s[i];
    } else {
      result += String(count) + prev;
      prev = s[i];
      count = 1;
    }

    if (count === 9) {
      result += String(count) + prev;
      count = 0;
      prev = s[i + 1];
    }
  }
  return count ? (result += String(count) + prev) : result;
};

console.log(runLengthEncoding("ASFAFAVKEAFNIEAUNCIACEDASC"));
console.log(runLengthEncoding("AAAAAAAAAAAAAAAAAAAAAAAA"));
console.log(runLengthEncoding("AAAAAAAAAAAAAAAAAAAAAAAAV"));
console.log(runLengthEncoding("VAAAAAAAAAVAAAAAAAAAAAAAAA"));
console.log(runLengthEncoding("EASWWWWW"));
