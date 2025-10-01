function canJump(nums: number[]): boolean {
  let maxJump = 0
  let n =  nums.length - 1

  for (let i = 0; i <= n; i++) {
    if (i > maxJump) {
      return false
    }

    maxJump = Math.max(maxJump, i + nums[i])
  }
  return true
};

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))