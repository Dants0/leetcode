function findWordsContaining(words: string[], x: string): number[] {

  let indxs: number[] = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      indxs.push(i)
    }
  }

  return indxs
};