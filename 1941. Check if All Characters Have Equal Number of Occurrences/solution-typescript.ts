
function areOccurrencesEqual(s: string): boolean {
  let dict = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    let count = dict.get(s[i]) || 0;
    dict.set(s[i], count + 1)
  }

  const values = Array.from(dict.values())
  const first = values[0]

  for (let val of values) {
    if (val !== first) {
      return false
    }
  }
  return true
};

areOccurrencesEqual("abacbc")