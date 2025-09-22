function sortColors(nums: number[]): void {
  let left: number = 0
  let right: number = nums.length - 1
  let i: number = 0

  while (i <= right) {
    if (nums[i] == 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]]
      left = left + 1
      i = i + 1
    } else if (nums[i] == 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]]
      right = right - 1
    } else {
      i = i + 1
    }
  }
};