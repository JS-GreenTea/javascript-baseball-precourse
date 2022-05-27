import { RANGE, LENGTH } from "./constant.js";

export default class Computer {
  constructor() {
    this.number = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const generateNumbers = [];
    while (generateNumbers.length !== LENGTH) {
      const randomNumber = this.pickNumberInRange(RANGE["MIN"], RANGE["MAX"]);
      if (!generateNumbers.includes(randomNumber))
        generateNumbers.push(randomNumber);
    }
    return generateNumbers.join("");
  }

  pickNumberInRange(start, end) {
    return MissionUtils.Random.pickNumberInRange(start, end);
  }
}
