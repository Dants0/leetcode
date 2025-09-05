function divide(dividend: number, divisor: number): number {
  const INT_MAX = 2147483647
  const INT_MIN = -2147483648
  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX
  }
  let divide = Math.trunc(dividend / divisor)
  return divide
};

divide(-2147483648, -1)