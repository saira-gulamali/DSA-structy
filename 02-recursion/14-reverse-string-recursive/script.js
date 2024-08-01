// big O
// Time: O(n^2)
// Space: O(n^2)
// chatgpt's answer was confusing but interesting: space: O(n), because strings are only kept in memory temporarily and take no extra space?? need to check this with alvin

const reverseString = (s) => {
  // base case
  if (s.length === 0) {
    return "";
  }

  return reverseString(s.slice(1)) + s[0];
};
console.log(reverseString("hello")); // -> "olleh"
console.log(reverseString("abcdefg")); // -> "gfedcba"
console.log(reverseString("stopwatch")); // -> "hctawpots"
console.log(reverseString("")); // -> ""
