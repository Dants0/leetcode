const dict: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
function romanToInt(s: string): number {
  const romanValue = s
  let total = 0
  for (let i = 0; i < romanValue.length; i++) {
    let currentValue = dict[romanValue[i]];
    let nextValue = dict[romanValue[i + 1]];
    if (currentValue < nextValue) {
      currentValue = -currentValue
      total += currentValue
    } else {
      currentValue = +currentValue
      total += currentValue
    }
  }
  return total
}