function maxDifference(s: string): number {
  const freq = Array(26).fill(0)
  const t = 'a'.charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - t]++;
  }

  let odd = 0
  let even = Number.MAX_SAFE_INTEGER

  for (const n of freq) {
    if (n % 2 === 1) {
      odd = Math.max(odd, n)
    } else if (n !== 0) {
      even = Math.min(even, n)
    }
  }

  const maxDiff = even === Number.MAX_SAFE_INTEGER ? odd : odd - even

  return maxDiff;
}