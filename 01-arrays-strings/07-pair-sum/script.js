// Big O
// n= length of array
// Time: O(n)
// Space: O(n)

function pairSum(numbers, targetSum) {
  const numChecker = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    // if (numChecker[complement] !== undefined) {
    //   return [numChecker[complement], i];
    // }

    // alternative syntax
    if (complement in numChecker) {
      return [numChecker[complement], i];
    }
    numChecker[num] = i;
    // console.log(numChecker);
  }
}

// brute force solution
// function pairSum(numbers, targetSum) {
//   for (i = 0; i < numbers.length; i++) {
//     for (j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         return [i, j];
//       }
//     }
//   }

//   // console.log(pairIndexes);

//   // for (let i = 0; i < pairIndexes.length; i++) {
//   //   const [a, b] = pairIndexes[i];
//   //   if (numbers[a] + numbers[b] === targetSum) {
//   //     console.log(numbers[a], numbers[b], targetSum);
//   //     return [a, b];
//   //   }
//   // }
// }

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]
console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([6, 4, 2, 8], 12)); // -> [1, 3]
const numbersX = [];
for (let i = 0; i <= 30000; i += 1) {
  numbersX.push(i);
}
console.log(pairSum(numbersX, 59999)); // -> [ 29999, 30000 ]
