// Big O
// n = length of string
// Time: O(n)
// Space: O(n)

function compress(str) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < str.length) {
    if (str[i] === str[j]) {
      j++;
    } else {
      let num = j - i;
      if (num === 1) {
        result.push(str[i]);
      } else {
        result.push(num, str[i]);
      }
      i = j;
    }
  }

  return result.join("");
}

console.log(compress("ccaaatsss")); // -> '2c3at3s'
console.log(compress("ssssbbz")); // -> '4s2bz'
console.log(compress("ppoppppp")); // -> '2po5p'
console.log(compress("nnneeeeeeeeeeeezz")); // -> '3n12e2z'
console.log(
  compress(
    "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  )
);
// -> '127y'
