function longestCommonPrefix(strs: string[]): string {
  let i = 0 // compare with first item
  let ret = ''

  while (true) {
    const char = strs[0][i]
    const match = strs.every((str) => str[i] === char)
    if (match) {
      i += 1
    } else {
      break
    }
  }

  ret = strs[0].slice(0, i)
  return ret
}

let test = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(test)) // fl

test = ['dog', 'racecar', 'car']
console.log(longestCommonPrefix(test)) // ""
