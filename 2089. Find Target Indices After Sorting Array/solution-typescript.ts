function targetIndices(nums: number[], target: number): number[] {

  const sortedArray = nums.sort((a, b) => a - b)

  let indxs: number[] = []
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === target) {
      indxs.push(i)
    }
  }
  return indxs
};