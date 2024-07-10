// big O
// n = num of groups
// m = max num found in any group
//  Time: O(n*m)
// Space: O(n*m)

function uncompress(str) {
  let result = [];

  let i = 0;
  let j = 0;

  let nums = "0123456789";

  while (i < str.length) {
    if (nums.includes(str[j])) {
      j++;
    } else {
      let repeat = Number(str.slice(i, j));
      for (let count = 0; count < repeat; count++) {
        result.push(str[j]);
      }
      j++;
      i = j;
    }
  }

  return result.join("");
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
