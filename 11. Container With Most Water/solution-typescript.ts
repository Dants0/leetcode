function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1

  let highArea = 0

  while (left < right) {
    let heightH = Math.min(height[left], height[right])

    let widthW = right - left

    let area = heightH * widthW

    if (area > highArea) {
      highArea = area
    }


    if (height[left] < height[right]) {
      left++
    }else{
      right--
    }
  }
  
  return highArea
};


maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])