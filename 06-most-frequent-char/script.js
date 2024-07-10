// Big O
// n = length of string
// Time: O(n)
// Space: O(n)

function mostFrequentChar(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let maxCount = 0;
  let maxLetter = null;
  // for (let i = 0; i < str.length; i++) {
  //   if (charMap[str[i]] > maxCount) {
  //     maxCount = charMap[str[i]];
  //     maxLetter = str[i];
  //   }

  // go through the object instead of repeating ourselves in the string
  for (let key in charMap) {
    if (charMap[key] > maxCount) {
      maxCount = charMap[key];
      maxLetter = key;
    }
  }

  return maxLetter;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("david")); // -> 'd'
console.log(mostFrequentChar("abby")); // -> 'b'
console.log(mostFrequentChar("mississippi")); // -> 'i'
console.log(mostFrequentChar("potato")); // -> 'o'
console.log(mostFrequentChar("eleventennine")); // -> 'e'
console.log(mostFrequentChar("riverbed")); // -> 'r'
