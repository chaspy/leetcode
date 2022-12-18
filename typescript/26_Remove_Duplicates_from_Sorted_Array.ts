function removeDuplicates(nums: number[]): number {
  let k = 0
  nums.forEach(function (value, index) {
    if (index == 0) {
      // do nothing
      k += 1 // k = 1
    } else if (nums.slice(0, k).includes(value)) {
      // do nothing. skip since the number is duplicated.
    } else {
      nums[k] = value
      k += 1
    }
  })
  console.log(`nums: ${nums}`)
  return k
}

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

let nums = [1, 1, 2]
let expectedNums = [1, 2]
let k = removeDuplicates(nums)
console.log(`k: ${k}`)
console.log(`expectedNums.length: ${expectedNums.length}`)

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
expectedNums = [0, 1, 2, 3, 4]
k = removeDuplicates(nums)
console.log(`k: ${k}`)
console.log(`expectedNums.length: ${expectedNums.length}`)
