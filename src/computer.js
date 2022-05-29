import { RANGE, LENGTH } from './constant.js';

export default class Computer {
  constructor() {
    this.number = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const generateNumbers = [];
    while (generateNumbers.length !== LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        RANGE.MIN,
        RANGE.MAX
      );
      if (!generateNumbers.includes(randomNumber))
        generateNumbers.push(randomNumber);
    }
    return generateNumbers.join('');
  }
}
