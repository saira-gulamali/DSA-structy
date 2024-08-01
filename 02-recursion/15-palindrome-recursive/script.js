// Big O
// Time: O(n^2)
// Space: O(n^2)

const palindrome = (s) => {
  // basecase
  if (s.length < 2) {
    return true;
  }

  if (s[s.length - 1] !== s[0]) {
    return false;
  }
  return palindrome(s.slice(1, -1));
};
console.log(palindrome("pop")); // -> true
console.log(palindrome("kayak")); // -> true
console.log(palindrome("pops")); // -> false
console.log(palindrome("pops")); // -> false
console.log(palindrome("boot")); // -> false
console.log(palindrome("rotator")); // -> true
console.log(palindrome("abcbca")); // -> false
console.log(palindrome("")); // -> true
