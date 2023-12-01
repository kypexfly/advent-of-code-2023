import { words } from "./constants.js";

const extractFirstAndLastDigit = (word) => {
  const digits = word.match(/\d/g);
  return [digits.at(0), digits.at(-1)].join("");
};

const sumDigits = (list) => {
  return list.reduce((acc, curr) => {
    const twoDigitNumber = parseInt(extractFirstAndLastDigit(curr));
    return acc + twoDigitNumber;
  }, 0);
};

const result = sumDigits(words);

console.log("Result", result);
