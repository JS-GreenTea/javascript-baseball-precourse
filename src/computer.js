export default class Computer {
  constructor() {
    this.number = this.generateRandomNumber();
  }
  generateRandomNumber() {
    const generateNumbers = [];
    while (generateNumbers.length !== 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!generateNumbers.includes(randomNumber))
        generateNumbers.push(randomNumber);
    }
    return generateNumbers.join("");
  }
}
