// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s: string): number {
  const arr = s.split('')
  //console.log(arr)
  let total = 0

  arr.forEach(function (value, index) {
    //console.log(arr[index])
    if (arr[index] == 'I') {
      if (arr[index + 1] == 'V' || arr[index + 1] == 'X') {
        return
      } else {
        total = total + 1
      }
    } else if (arr[index] == 'V') {
      if (arr[index - 1] == 'I') {
        total = total + 4
      } else {
        total = total + 5
      }
    } else if (arr[index] == 'X') {
      if (arr[index + 1] == 'L' || arr[index + 1] == 'C') {
        return
      } else if (arr[index - 1] == 'I') {
        total = total + 9
      } else {
        total = total + 10
      }
    } else if (arr[index] == 'L') {
      if (arr[index - 1] == 'X') {
        total = total + 40
      } else {
        total = total + 50
      }
    } else if (arr[index] == 'C') {
      if (arr[index + 1] == 'D' || arr[index + 1] == 'M') {
        return
      } else if (arr[index - 1] == 'X') {
        total = total + 90
      } else {
        total = total + 100
      }
    } else if (arr[index] == 'D') {
      if (arr[index - 1] == 'C') {
        total = total + 400
      } else {
        total = total + 500
      }
    } else if (arr[index] == 'M') {
      if (arr[index - 1] == 'C') {
        total = total + 900
      } else {
        total = total + 1000
      }
    } else {
      // do nothing
      //console.log('else')
    }
  })
  return total
}

// I can be placed before V (5) and X (10) to make 4 and 9.
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9

// X can be placed before L (50) and C (100) to make 40 and 90.
console.log(romanToInt('XL')) // 40
console.log(romanToInt('XC')) // 90

// C can be placed before D (500) and M (1000) to make 400 and 900.
console.log(romanToInt('CD')) // 400
console.log(romanToInt('CM')) // 900

// official example
console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
