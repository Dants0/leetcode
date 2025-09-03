function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let max = 0;

  for (let a of arr1) {
    for (let b of arr2) {
      let s = a.toString();
      let t = b.toString();
      let c = 0;

      while (c < s.length && c < t.length && s[c] === t[c]) {
        c++;
      }

      max = Math.max(max, c);
    }
  }

  return max;
};

let arr1 = [1, 10, 100];
let arr2 = [1000];

console.log(longestCommonPrefix(arr1, arr2)); // ✅ 3
