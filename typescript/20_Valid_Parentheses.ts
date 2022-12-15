function isValid(s: string): boolean {
  const arr = s.split('')
  let stack: string[] = []

  let parenthese = new Map()
  parenthese.set(')', '(')
  parenthese.set('}', '{')
  parenthese.set(']', '[')

  let ret = true

  arr.forEach(function (value, index) {
    stack.push(value)

    if (stack.length == 1) {
      // do nothing
    } else if (stack[stack.length - 2] == parenthese.get(value)) {
      stack.pop()
      stack.pop()
    } else if (value == '(' || value == '{' || value == '[') {
      // do nothing
    } else {
      ret = false
    }
  })

  if (stack.length != 0) {
    ret = false
  }

  return ret
}

// Example 1:
console.log(isValid('()')) // true

// Example 2:
console.log(isValid('()[]{}')) // true

// Example 3:
console.log(isValid('(]')) // false
