let str1 = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
let str2 = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

let addBinary = (a: string, b: string): string => {
  let x = BigInt(`0b${a}`);
  let y = BigInt(`0b${b}`);

  while (y !== 0n) {
    let carry = x & y;
    x = x ^ y;
    y = carry << 1n;
  }

  return x.toString(2);
};

console.log(addBinary(str1, str2));