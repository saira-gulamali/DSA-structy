const reverseString = (s) => {
  if (s.length === 0) {
    return "";
  }

  return s[s.length - 1] + reverseString(s.slice(0, -1));
};

console.log(reverseString("hello")); // -> "olleh"
console.log(reverseString("stopwatch")); // -> "hctawpots"
