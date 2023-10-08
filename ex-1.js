let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  // Start coding here
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] + amount);
  }
  return newArr;
}

addNumber(numbers, 10); // Output: [20, 30, 40]
addNumber(anotherNumbers, 2); // Output: [4, 6, 8]

console.log(addNumber(numbers, 10));
console.log(addNumber(anotherNumbers, 2));
