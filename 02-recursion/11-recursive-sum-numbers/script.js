const sumNumbersRecursive = (numbers) => {
  // todo
  if (numbers.length < 1) {
    return 0;
  }

  return numbers[0] + sumNumbersRecursive(numbers.slice(1));
};
console.log(sumNumbersRecursive([5, 2, 9, 10])); // -> 26
console.log(sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1])); // -> 1
console.log(sumNumbersRecursive([])); // -> 0
console.log(sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1])); // -> 1001
console.log(sumNumbersRecursive([700, 70, 7])); // -> 777
console.log(sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])); // -> -55
console.log(
  sumNumbersRecursive([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
); // -> 0
