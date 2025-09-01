function myAtoi(s: string): number {

  const INT_MIN = -2147483648
  const INT_MAX = 2147483647
  const { length } = s
  let sFormat = s.trim()


  let sign = 1

  if (sFormat[0] === '-') { sign = -1 }
  if (sFormat[0] === '+' || sFormat[0] === "-") { sFormat = sFormat.substring(1) }

  let numberString: string = '';

  for (let i = 0; i < length; i++) {
    if (sFormat[i] >= '0' && sFormat[i] <= '9') {
      numberString += sFormat[i]
    } else {
      break;
    }
  }

  const result = sign * Number(numberString)

  if (result < INT_MIN) return INT_MIN
  if (result > INT_MAX) return INT_MAX


  return result
};


myAtoi("21474836460")