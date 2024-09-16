const fiveSort = (numbers) => {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[end] === 5) {
      end--;
    } else if (numbers[start] === 5) {
      [numbers[start], numbers[end]] = [numbers[end], numbers[start]];
    } else {
      start++;
    }
  }

  return numbers;
};

fiveSort([5, 5, 5, 1, 1, 1, 4]);
