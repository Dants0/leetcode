function minDistance(word1: string, word2: string): number {
  let s1 = word1.length
  let s2 = word2.length

  let matriz: number[][] = Array.from({ length: s1 + 1 }, () =>
    Array(s2 + 1).fill(0)
  )

  for (let i = 0; i <= s1; i++) {
    matriz[i][0] = i
  }

  for (let j = 0; j <= s2; j++) {
    matriz[0][j] = j
  }

  for (let i = 1; i <= s1; i++) {
    for (let j = 1; j <= s2; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        matriz[i][j] = matriz[i - 1][j - 1]
      } else {
        matriz[i][j] = 1 + Math.min(
          matriz[i - 1][j],
          matriz[i][j - 1],
          matriz[i - 1][j - 1]
        )
      }
    }
  }
  return matriz[s1][s2]
};

minDistance("horse", "ros") //should be return how many count to minDistance, in this case is 3