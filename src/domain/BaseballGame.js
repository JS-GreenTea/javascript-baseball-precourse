import { HINT } from '../constants.js';

const { pickNumberInRange } = MissionUtils.Random;

export default class BaseballGame {
  constructor(input, result, submitBtn) {
    this.input = input;
    this.result = result;
    this.submitBtn = submitBtn;
    this.computerInputNumbers = this.getComputerInputNumbers();
    this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = this.input.value;
      const playResult = this.play(this.computerInputNumbers, userInputNumbers);
    });
  }

  getComputerInputNumbers() {
    let result = new Set();

    while (result.size < 3) {
      const pickedNumber = pickNumberInRange(1, 9);
      result.add(pickedNumber.toString());
    }

    return Array.from(result).join('');
  }
}
