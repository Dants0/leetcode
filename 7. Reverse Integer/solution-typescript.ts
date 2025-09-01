function reverse(x: number): number {

  const INT_MIN = -2147483648
  const INT_MAX = 2147483647

  const isNegative = x < 0

  let integerString = x.toString().split("").reverse().join("")
  let convertedToInteger = parseInt(integerString)


  const finalResult = isNegative ? convertedToInteger * -1 : Math.abs(convertedToInteger)

  if (finalResult < INT_MIN || finalResult > INT_MAX) return 0


  return finalResult
};

reverse(230)