// Example of recursion
// parts of a recursive function
// 1 recursive function calls itself
// 2 base case - ending case
// 3 each recursive call will work towards the base case
// 4 make sure your recursive function will meet your base case

function countdown(n) {
  if (n === 0) {
    return;
  }
  console.log("entering", n);
  countdown(n - 1);
  console.log("returning", n);
}
countdown(5);
