const pairSum = (numbers, target) => {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const pair = target - numbers[i];
    if (numMap[pair] !== undefined) {
      return [numMap[pair], i];
    }
    numMap[numbers[i]] = i;
  }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));
