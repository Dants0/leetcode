function expand(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}


function longestPalindrome(s: string): string {
  let start = 0;
  let end = 0;


  for (let i = 0; i < s.length; i++) {
    let lenImpar = expand(s, i, i)
    let lenPar = expand(s, i, i + 1)
    let len = Math.max(lenImpar, lenPar)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }


  }



  return s.substring(start, end + 1)
};
