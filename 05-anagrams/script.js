// Big O
// n = length of string 1
// m = length of string 2
// Time: O(n+m) - linear/multi-linear
// Space: O(n+m)

function anagrams(str1, str2) {
  // let orderedStr1 = str1.split("").sort().join("");
  // let orderedStr2 = str2.split("").sort().join("");

  // return orderedStr1 === orderedStr2;
  const charMap1 = {};
  for (let char of str1) {
    charMap1[char] = charMap1[char] + 1 || 1;
  }
  console.log(charMap1);
  for (let char2 of str2) {
    if (charMap1[char2] === undefined) {
      return false;
    } else {
      charMap1[char2] -= 1;
    }
  }

  for (let char in charMap1) {
    if (charMap1[char] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("monkeyswrite", "newyorktimes")); // -> true
console.log(anagrams("paper", "reapa")); // -> false
console.log(anagrams("elbow", "below")); // -> true
console.log(anagrams("tax", "taxi")); // -> false
console.log(anagrams("night", "thing")); // -> true
console.log(anagrams("abbc", "aabc")); // -> false
console.log(anagrams("po", "popp")); // -> false
console.log(anagrams("pp", "oo")); // -> false
