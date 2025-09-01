function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let reversed = parseInt(x.toString().split("").reverse().join(""))
  const isP = x === reversed

  return isP ? true : false
};


isPalindrome(121)