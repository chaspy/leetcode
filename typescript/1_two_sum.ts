function twoSum(nums: number[], target: number): number[] {
  const ans = [] as number[]

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        ans.push(i)
        ans.push(j)
      }
    }
  }

  return ans
}

const ret = twoSum([2, 7, 11, 15], 9)
const exp = [0, 1]

if (JSON.stringify(ret) == JSON.stringify(exp)) {
  console.log('ok')
}
