let nums1 = [1, 3]
let nums2 = [2]


function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let merged = [...nums1, ...nums2]
  let sortedArr = merged.sort((a, b) => a - b)
  let lengthSortedArray = sortedArr.length
  let median

  if (lengthSortedArray % 2 === 0) {
    median = (sortedArr[lengthSortedArray / 2] + sortedArr[lengthSortedArray / 2 - 1]) / 2.0
  } else {
    median = sortedArr[Math.floor(lengthSortedArray / 2)]
  }
  return median
};

findMedianSortedArrays(nums1, nums2)