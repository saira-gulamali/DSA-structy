// Big O
// Time: O(n^2), n= length of array
// Space: O(n^2)
// explanation: it is n*n because there are n recursive calls and for each call we need to slice/copy the array, which is an operation of n

function sumOfLengths(strings) {
  // base case
  if (strings.length === 0) {
    return 0;
  }

  return strings[0].length + sumOfLengths(strings.slice(1));
}

console.log(sumOfLengths(["goat", "cat", "purple"])); // -> 13
console.log(sumOfLengths(["bike", "at", "pencils", "phone"])); // -> 18
console.log(sumOfLengths([])); // -> 0
console.log(sumOfLengths(["", " ", "  ", "   ", "    ", "     "])); // -> 15
console.log(sumOfLengths(["0", "313", "1234567890"])); // -> 14
