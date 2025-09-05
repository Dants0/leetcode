
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  console.log(candidates, target)

  function back(start: number, path: number[], sum: number) {
    if (sum === target) {
      result.push([...path])
      return
    }

    if (sum > target) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      back(i, path, sum + candidates[i])
      path.pop()
    }
  }

  back(0, [], 0)
  return result
};

combinationSum([2, 3, 6, 7], 7)