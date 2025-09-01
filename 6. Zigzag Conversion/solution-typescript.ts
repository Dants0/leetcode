// let phrase = 'PAYPALISHIRING'

function convert(s: string, numRows: number): string {

  if (numRows == 1) {
    return s
  }

  let rows: string[] = Array(numRows).fill("")
  let currentRow = 0
  let goingD = false

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i]
    if (currentRow == 0 || currentRow == numRows - 1) {
      goingD = !goingD
    }
    currentRow += goingD ? 1 : -1
  }

  return rows.join("")
};

// convert(phrase, 4)