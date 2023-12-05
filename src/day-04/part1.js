import { example, input } from "./constant.js";

function calculatePoints(winningNumbers, myNumbers) {
  let matches = 0
  winningNumbers.forEach(winningNumber => {
    if (myNumbers.includes(winningNumber)) {
      matches += 1
    }
  })
  
  return matches === 0 ? 0 :Math.pow(2, matches - 1)

}

function parseInput (input) {
  return input.map(card => {
    const [cardString, valuesString] = card.split(": ")
    return {
      cardNumber: Number(cardString.split(" ")[1]),
      winningNumbers: valuesString.split(" | ")[0].trim().split(" ").map(Number).filter(Boolean),
      myNumbers: valuesString.split(" | ")[1].trim().split(" ").map(Number).filter(Boolean),
    }
  })
}

function solve(input) {

  const parsedInput = parseInput(input)

  let points = 0

  parsedInput.forEach(({winningNumbers, myNumbers}) => {
    points += calculatePoints(winningNumbers, myNumbers)
  })

  return points
}

console.log('Result', solve(input))