let array1Row: number[] = [1, 2, 3, 4]
let array2Col: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i <= array1Row.length; i++) {
  for (let j = 0; j < array2Col.length; j++) {
    // console.log(i, j)
  }
}

let merged = [...array1Row, ...array2Col]
let finalArray = merged.flat()
const pow = 2
// console.log(finalArray)

let numbers: number[] = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
  let result: string[] = []
  result.push(`Index: ${i} => Potência ${numbers[i]} de ${pow}: ${Math.pow(numbers[i], 2)}`)
  // console.log(result)
}





let s: string = 'Guilherme Dantas'

let sFormat = s.split("").reverse().join("").trim()
console.log(sFormat)

let count = 0;
for (let n = 0; n < sFormat.length; n++) {
  let char;
  char = sFormat[n]
  let psFormat = sFormat.slice(0, n + 1).split("").reverse().join("").trim()
  console.log(psFormat + count)
  count++
}


let randomPhrase = "Teste"

for (let u = 0; u < randomPhrase.length; u++) {
  let partial = randomPhrase.slice(0, u + 1).split("").reverse().join("")
    
}