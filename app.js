const fs = require("fs");
const lodash = require("lodash");
let j = 1;
let r = 1;
let w = 0;
// revers and regular data
function print() {
  fs.readFile("data.txt", "utf-8", function (err, data) {
    let arr = lodash.split(data, " ");
    let arr2 = lodash.reverse(arr);
    let arr3 = lodash.join(arr2, " ");
    if (err) throw err;
    console.log(data);
    for (let i of data) {
      if (i === " ") {
        j += 1;
      }
    }
    console.log(arr3);
  });
  console.log(j);
}
print();
// uniq words
function uniq() {
  fs.readFile("data.txt", "utf-8", function (err, data) {
    if (err) throw err;
    let doublicet = data.split(" ");
    let uniq = lodash.uniq(doublicet, false);
    let uniq2 = lodash.join(uniq, " ");
    let uniq3 = lodash.toUpper(uniq2);
    for (let k of uniq2) {
      if (k === " ") {
        r += 1;
      }
    }
    const longWords = doublicet.filter((word) => word.length > 5);

    console.log(r);
    console.log(uniq3);
    console.log(longWords);
  });
}
uniq();
// chalenge question
function countVowels(word) {
  const vowels = "aeiouAEIOU";
  return lodash.filter([...word], (char) => vowels.includes(char)).length;
}
function countVowelsInWords(text) {
  const words = text.split(" ");
  const vowelCounts = {};

  _.forEach(words, (word) => {
    if (word.length > 0) {
      const vowelCount = countVowels(word);
      vowelCounts[word] = vowelCount;
    }
  });

  _.forEach(vowelCounts, (count, word) => {
    console.log(`${word}: ${count}`);
  });
}
console.log(countVowelsInWords(data));
