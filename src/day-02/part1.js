import { input } from "./constants.js";

function parseInput(input) {
  const bag = { red: 12, green: 13, blue: 14 };
  const gameId = parseInt(input.split(":")[0].split(" ")[1]);
  const rounds = input.split(": ")[1].split("; ");

  for (const round of rounds) {
    const cubes = round.split(", ");
    for (const cube of cubes) {
      const [count, color] = cube.split(" ");
      if (parseInt(count) > bag[color]) return null;
    }
  }

  return gameId;
}

function solvePuzzle(input) {
  let sumOfGameIds = 0;

  for (const gameData of input) {
    const gameId = parseInput(gameData);
    if (gameId !== null) sumOfGameIds += gameId;
  }

  return sumOfGameIds;
}

const result = solvePuzzle(input);

console.log("Result", result);
