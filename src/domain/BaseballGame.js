import { isDuplicated, isInvalidLength, includeSpace } from './validator.js';
import {
  HINT,
  EMPTY_STR,
  RESTART_TEMPLATE,
  ALERT_MESSAGE,
} from '../constants.js';

const { pickNumberInRange } = MissionUtils.Random;

export default class BaseballGame {
  constructor(input, result, submitBtn) {
    this.input = input;
    this.result = result;
    this.submitBtn = submitBtn;

    this.computerInputNumbers = this.getComputerInputNumbers();

    this.submitBtn = this.submitBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const userInputNumbers = this.input.value;
      if (!this.validateInput(userInputNumbers)) {
        this.initInput();
        return;
      }

      const playResult = this.play(this.computerInputNumbers, userInputNumbers);
      this.render(playResult);
    });
  }

  validateInput(inputNumbers) {
    let message = [];

    if (isNaN(inputNumbers)) {
      message.push(ALERT_MESSAGE.NAN);
    }
    if (includeSpace(inputNumbers)) {
      message.push(ALERT_MESSAGE.SPACE);
    }
    if (isDuplicated(inputNumbers)) {
      message.push(ALERT_MESSAGE.DUPLICATE);
    }
    if (isInvalidLength(inputNumbers)) {
      message.push(ALERT_MESSAGE.INVALID_LENGTH);
    }

    if (message.length > 0) {
      alert(message.join('\n'));
    }

    return message.length === 0;
  }

  initInput() {
    this.input.value = EMPTY_STR;
    this.result.innerHTML = EMPTY_STR;
  }

  bindRestartEvent() {
    const restartBtn = document.querySelector('#restart');
    restartBtn.addEventListener('click', (event) => {
      this.computerInputNumbers = this.getComputerInputNumbers();
      this.initInput();
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

    if (resultStr === HINT.CORRECT) {
      this.result.innerHTML += RESTART_TEMPLATE;
      this.bindRestartEvent();
    }
  }
}
