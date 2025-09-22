function isValid(s: string): boolean {
  if (s == '()') {
    return true
  }

  const stack: string[] = []
  const pairs: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === "{") {
      stack.push(s[i])
    } else {
      if (stack.length === 0) return false
      const top = stack.pop()
      if (top !== pairs[s[i]]) return false
    }
  }

  console.log(stack)

  return stack.length === 0
};

isValid("(){}[]")
isValid("(]")


