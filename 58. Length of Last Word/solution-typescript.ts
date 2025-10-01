function lengthOfLastWord(s: string): number {
  let text = s.split(" ")
  let last = text.findLast((i) => i, text)
  if(!last){
    return 0
  }
  return last.length
};

lengthOfLastWord(" a")