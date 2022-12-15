function isValid(s: string): boolean {
  const arr = s.split('')
  let queue: string[] = []

  let parenthese = new Map()
  parenthese.set(')', '(')
  parenthese.set('}', '{')
  parenthese.set(']', '[')

  let ret = true

  arr.forEach(function (value, index) {
    queue.push(value)

    if (queue.length == 1) {
      // do nothing
    } else if (queue[queue.length - 2] == parenthese.get(value)) {
      queue.pop()
      queue.pop()
    } else if (value == '(' || value == '{' || value == '[') {
      // do nothing
    } else {
      ret = false
    }
  })

  if (queue.length != 0) {
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
