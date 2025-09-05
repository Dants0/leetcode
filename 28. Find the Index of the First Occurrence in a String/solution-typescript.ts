function buildLPS(needle: string): number[] {
  const lps: number[] = new Array(needle.length).fill(0)

  let len = 0;
  let i = 1;

  while (i < needle.length) {
    if (needle[i] === needle[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len > 0) {
        len = lps[len - 1]
      } else {
        lps[i] = 0
        i++
      }
    }
  }

  return lps
}


function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0
  }

  const lps = buildLPS(needle)

  let j = 0
  let i = 0

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
      if (j === needle.length) {
        return i - j
      }
    } else {
      if (j > 0) {
        j = lps[j - 1]
      } else {
        i++
      }
    }
  }


  return -1
};

