function removeElement(nums: number[], val: number): number {
  let k = 0
  nums.forEach(function (value, index) {
    if (nums[index] == val) {
      // do nothing. skip if val and nums[index] are the same
    } else {
      nums[k] = value
      k += 1
    }
  })
  console.log(`nums: ${nums}`)
  return k
}

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

let nums = [3, 2, 2, 3]
let expectedNums = [2, 2]
let k = removeElement(nums, 3)
console.log(`k: ${k}`)
console.log(`expectedNums.length: ${expectedNums.length}`)

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

nums = [0, 1, 2, 2, 3, 0, 4, 2]
expectedNums = [0, 1, 3, 0, 4]
k = removeElement(nums, 2)
console.log(`k: ${k}`)
console.log(`expectedNums.length: ${expectedNums.length}`)
