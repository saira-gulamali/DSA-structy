const pairSum = (numbers, targetSum) => {
  // todo
  // [3, 2, 5, 4, 1], 8

  let count = {};

  for (let i = 0; i < numbers.length; i++) {
    count[numbers[i]] = i;
  }
  for (let i = 0; i < numbers.length; i++) {
    let compliment = targetSum - numbers[i];
    console.log(compliment);

    if (compliment in count && count[compliment] !== i) {
      return [i, count[compliment]];
    }
  }
};
const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
console.log(pairSum(numbers, 59999)); // -> [ 29999, 30000 ]
