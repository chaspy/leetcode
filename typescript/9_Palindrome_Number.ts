function isPalindrome(x: number): boolean {
  let arr = []
  let digit = String(x).length
  console.log(`digit: ${digit}`)
  let quotient = 0 // 商
  let remainder = x // 余り

  for (let i = digit - 1; i >= 0; i--) {
    quotient = Math.floor(remainder / 10 ** i)
    remainder = x % 10 ** i
    console.log(`quotient: ${quotient}`)
    console.log(`remainder: ${remainder}`)
    arr.push(quotient)
    console.log(`debug: arr: ${arr}`)
  }

  console.log(arr)
  const org = arr.slice()
  const rev = arr.reverse()
  console.log(org)
  console.log(rev)
  console.log(org.toString())
  console.log(rev.toString())

  if (org.toString() === rev.toString()) {
    return true
  } else {
    return false
  }
}

// true
if (isPalindrome(121)) {
  console.log('ok')
}

// false
if (!isPalindrome(-121)) {
  console.log('ok')
}

// false
if (!isPalindrome(10)) {
  console.log('ok')
}
