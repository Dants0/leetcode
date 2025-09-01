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
  console.log({ i, currentValue, nextValue, previousValue, total, result })
}




for (const value of dict.values()) {
  let currentAge = 0
  let total = 0;

  const values = value.age + value.age
  console.log(values)
}