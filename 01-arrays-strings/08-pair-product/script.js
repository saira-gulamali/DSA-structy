// Big O
// n = length of array
// Time: O(n)
// Space: O(n)

function pairProduct(numbers, targetSum) {
  const numChecker = {};

  for (i = 0; i < numbers.length; i++) {
    const complement = targetSum / numbers[i];
    if (numChecker[complement] !== undefined) {
      return [numChecker[complement], i];
    }
    numChecker[numbers[i]] = i;
    // console.log(numChecker);
  }
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]
const numbersX = [];
for (let i = 0; i <= 30000; i += 1) {
  numbersX.push(i);
}
console.log(pairProduct(numbersX, 899970000)); // -> [ 29999, 30000 ]
