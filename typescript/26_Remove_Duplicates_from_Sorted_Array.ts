function removeDuplicates(nums: number[]): number {
  let arr: number[] = []
  nums.forEach(function (value, index) {
    console.log(`debug: value, index = ${value}, ${index}`)
    console.log(`arr: ${arr}`)
    if (index == 0) {
      arr.push(value)
    } else if (value == arr[arr.length - 1]) {
      // do nothing
      console.log(`skipped. now: ${arr}`)
    } else {
      arr.push(value)
      console.log(`pushed. now: ${arr}`)
    }
  })
  console.log(`arr: ${arr}`)
  return arr.length
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
