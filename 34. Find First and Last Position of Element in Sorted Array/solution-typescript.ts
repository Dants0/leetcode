function searchRange(nums: number[], target: number): number[] {


  const stack: number[] = []

  for (let t in nums) {
    if (nums[t] == target) {
      stack.push(parseInt(t))
    }
  }


  if (stack.length === 0) {
    return [-1, -1]
  }

  return [stack[0], stack[stack.length - 1]]

};


searchRange([5, 7, 7, 8, 8, 10], 6)