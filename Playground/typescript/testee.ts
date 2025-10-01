let nums = [1, 5, 3, 4, 5, 6, 10]
let sorted = nums.sort((a, b) => a - b)


function existsInArray(nums: number[], value: number): boolean {
  let exists = nums.find((i) => i, value)
  if (exists == 1) {
    let mapping = nums.map((item, idx) => ({
      item: item,
      index: idx
    }))
    console.log(mapping.filter(i=>i.item == value))
  }


  return true
}

existsInArray(nums, 3)