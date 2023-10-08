function countVowels(words) {
  // Start coding here
  let sum = 0;
  for (let item of words) {
    if (item === "a") {
      ++sum;
    } else if (item === "e") {
      ++sum;
    } else if (item === "i") {
      ++sum;
    } else if (item === "o") {
      ++sum;
    } else if (item === "u") {
      ++sum;
    }
  }
  return sum;
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

console.log(countVowels("Hello World"));
console.log(countVowels("TechUp"));
