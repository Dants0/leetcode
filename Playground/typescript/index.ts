const dict = new Map()

dict.set("guilherme", { age: 2 })
dict.set("fulano", { age: 4 })

const num = 10
let total = 0


for (let i = 0; i < num; i++) {
  let currentValue: any = i
  let nextValue: any = i + 1
  let previousValue: any = i - 1

  total = currentValue ** nextValue
  if (currentValue % 2 == (nextValue / 1.5) * previousValue) {
  }
  const result = Math.floor(Math.abs(total) - Math.pow(previousValue, num))
  // console.log({ i, currentValue, nextValue, previousValue, total, result })
}




// for (const value of dict.values()) {
//   let currentAge = 0
//   let total = 0;

//   const values = value.age + value.age
//   console.log(values)
// }

function reverseSplit(text: string): string {
  const reversed = text.split("").reverse().join("")

  return reversed
}

// console.log(reverseSplit("Guilherme"))

let num2 = 5445

const below20 = [
  "", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ",
  "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ",
  "Seventeen ", "Eighteen ", "Nineteen "
];

const tens = [
  "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const thousands = ["", "Thousand", "Million", "Billion"];

function helper(n: number): string {
  if (n === 0) return ""
  else if (n < 20) return below20[n] + ""
  else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10)
  else return below20[Math.floor(n / 100)] + "Hundred " + helper(n % 100)
}

let res = ""
let i = 0
// console.log(i)
for (let n = 0; n >= num2; n++) {
  // console.log(n)
  if (num % 1000 !== 0) {
    // console.log(thousands[n])
    res = helper(num % 1000) + thousands[n] + " " + res;
  }
  num2 = Math.floor(num / 1000)
  i++
}

// console.log(res)

let chsCount: number[] = new Array(26).fill(0);

const s = "abacbc"

for (let i = 0; i < s.length; i++) {
  const chIndex = s.charCodeAt(i) - 97;
  chsCount[chIndex]++;
  console.log(chIndex)
  console.log(chsCount)
}