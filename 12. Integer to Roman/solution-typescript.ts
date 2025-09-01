const valuesWords = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
const valuesNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]


function intToRoman(num: number): string {
  let result = ""

  for (let i = 0; i < valuesNums.length; i++) {
    while (num >= valuesNums[i]) {
      num -= valuesNums[i]
      result += valuesWords[i]
    }
  }

  return result
};


intToRoman(3749)