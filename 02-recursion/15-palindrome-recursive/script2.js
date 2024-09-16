const palindrome = (s) => {
  if (s.length === 0) {
    return true;
  }
  if (s[0] === s[s.length - 1]) {
    return palindrome(s.slice(1, -1));
  } else {
    return false;
  }
};

console.log(palindrome("pop")); // -> true
console.log(palindrome("pops")); // -> false
