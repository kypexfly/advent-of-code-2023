import { example, input } from "./constants.js"

const digitReg = /\d+/igm

const isThereSymbolsAround = (lineNumber, startIndex, endIndex) => {
  
  return true
}

function solve(schematic) {
  let sum
  let matches

  for (const [lineNumber, lineData] of schematic.entries()) {
    matches = [...lineData.matchAll(digitReg)]

    matches.forEach(match => {
      const value = parseInt(match[0])
      const startIndex = match.index
      const endIndex = startIndex + match[0].length
      // console.log({value, startIndex, endIndex})

      if (isThereSymbolsAround(lineNumber, startIndex, endIndex)) {
        sum += value
      }

    })


  }
}

solve(example)