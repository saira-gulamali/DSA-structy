// Big O
// Time: O(2^n)
// solution forms a tree, as each node calls 2 more nodes/recursive calls
// as the next call is n-1 this continues until we hit the base case of 0/1
// so it continues to call fib twice n times
// Space:O(n)
// call stack max size is the tree depth (n) because nodes/bsae cases have to be popped off before other nodes can be added to the stack

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(0)); // -> 0
console.log(fibonacci(1)); // -> 1
console.log(fibonacci(2)); // -> 1
console.log(fibonacci(3)); // -> 2
console.log(fibonacci(4)); // -> 3
console.log(fibonacci(5)); // -> 5

// iterative approach
const fibonacciIterative = (n) => {
  const arr = [0, 1];
  // [0,1,1, 2,3,5]
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
console.log(fibonacciIterative(0)); // -> 0
console.log(fibonacciIterative(1)); // -> 1
console.log(fibonacciIterative(2)); // -> 1
console.log(fibonacciIterative(3)); // -> 2
console.log(fibonacciIterative(4)); // -> 3
console.log(fibonacciIterative(6)); // -> 5
