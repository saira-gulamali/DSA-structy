const factorial = (n) => {
  // todo
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(3)); // -> 6
console.log(factorial(6)); // -> 720
console.log(factorial(18)); // -> 6402373705728000
console.log(factorial(18)); // -> 6402373705728000
console.log(factorial(1)); // -> 1
console.log(factorial(13)); // -> 6227020800
console.log(factorial(0)); // -> 1
