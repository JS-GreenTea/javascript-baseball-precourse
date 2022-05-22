import { HINT } from '../constants.js';

const pickNumberInRange = MissionUtils.Random;

export default class BaseballGame {
  constructor(input, result, submitBtn) {
    this.input = input;
    this.result = result;
    this.submitBtn = submitBtn;

    this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = this.input.value;
    });
  }

  get computerInputNumbers() {
    let result = new Set();

    while (result.length < 3) {
      result.add(pickNumberInRange(1, 9).toString());
    }

    return Array.from(result).join('');
  }
}
