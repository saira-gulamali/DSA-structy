// Big O (brute force)
// Time: O(n*m)
// Space: O(min(n,m))

// Big O (optimised using set)
// Time: O(n+m)
// Space: O(n)

// third attempt
function intersection(a, b) {
  const combinedArray = [];
  const mapA = {};

  for (let element of a) {
    mapA[element] = 1;
  }

  for (let i = 0; i < b.length; i++) {
    if (mapA[b[i]] === 1) {
      combinedArray.push(b[i]);
    }
  }

  return combinedArray;
}

// Second attempt
// function intersection(a, b) {
//   const combinedArray = [];
//   const mapA = {};
//   const mapB = {};
//   for (let element of a) {
//     mapA[element] = 1;
//   }

//   for (let element of b) {
//     mapB[element] = 1;
//   }

//   for (let key in mapA) {
//     if (mapB[key] === 1) {
//       combinedArray.push(Number(key));
//     }
//   }

//   return combinedArray;
// }

// function intersection(a, b) {
//   const combinedArray = [];

//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       combinedArray.push(a[i]);
//     }
//   }
//   return combinedArray;
// }
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // -> [2,6]
console.log(intersection([2, 4, 6], [4, 2])); // -> [2,4]
console.log(intersection([4, 2, 1], [1, 2, 4, 6])); // -> [1,2,4]
console.log(intersection([0, 1, 2], [10, 11])); // -> []
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
console.log(intersection(a, b)); // -> [0,1,2,3,..., 49999]
