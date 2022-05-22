import { HINT, EMPTY_STR } from '../constants.js';

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
      this.render(playResult);
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

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers == userInputNumbers) {
      return HINT.CORRECT;
    }

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if (userInputNumbers.indexOf(computerInputNumbers[i]) !== -1) {
        ball++;
      }
    }

    if (!strike && !ball) {
      return HINT.NOTHING;
    }

    let ballStr = ball ? `${ball}${HINT.BALL}` : `${EMPTY_STR}`;
    let strikeStr = strike ? `${strike}${HINT.STRIKE}` : `${EMPTY_STR}`;

    return ballStr + strikeStr;
  }

  render(resultStr) {
    this.result.innerHTML = resultStr;
  }
}
