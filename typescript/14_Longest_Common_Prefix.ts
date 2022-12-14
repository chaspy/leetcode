function longestCommonPrefix(strs: string[]): string {
  // initialize
  let array = new Array(strs.length)
  for (let x = 0; x < strs.length; x++) {
    array[x] = new Array(strs.length) //配列(array)の各要素に対して、要素数5の配列を作成
    for (let y = 0; y < 100; y++) {
      // TODO: get length of words
      array[x][y] = ''
    }
  }

  let ret = ''

  for (let i = 0; i < strs.length; i++) {
    let a = strs[i].split('')
    for (let j = 0; j < a.length; j++) {
      array[i][j] = a[j]
    }
  }

  let tmp: string[] = new Array(strs.length)
  for (let k = 0; k < strs.length; k++) {
    for (let l = 0; l < strs.length; l++) {
      tmp.push(array[l][k])
    }
    console.log(tmp)
  }

  return ret
}

let test = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(test)) // fl

test = ['dog', 'racecar', 'car']
console.log(longestCommonPrefix(test)) // ""
