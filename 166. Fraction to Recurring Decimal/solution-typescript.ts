function fractionToDecimal(numerator: number, denominator: number): string {
  let mapperFraction = new Map<number, number>()
  let num = Math.abs(numerator)
  let den = Math.abs(denominator)
  let txt: string[] = []
  
  let intPhrase = Math.floor(num / den)
  txt.push(intPhrase.toString())

  let rem = num % den
  if (rem === 0) {
    return txt.join("")
  }

  txt.push(".")

  while (rem !== 0) {
    if (mapperFraction.has(rem)) {
      let idx = mapperFraction.get(rem)!;
      txt.splice(idx, 0, "(");
      txt.push(")");
      break;
    }

    mapperFraction.set(rem, txt.length);

    rem *= 10;
    txt.push(Math.floor(rem / den).toString());
    rem %= den;
  }


  return txt.join("")
}


console.log(fractionToDecimal(1, 2))
console.log(fractionToDecimal(2, 1))
console.log(fractionToDecimal(4, 333))
console.log(fractionToDecimal(1, 6))