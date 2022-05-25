import {
  isDuplicated,
  isInvalidLength,
  includeSpace,
  isNaN,
} from './validator.mjs';
import {
  HINT,
  EMPTY_STR,
  RESTART_TEMPLATE,
  ALERT_MESSAGE,
} from '../constants.mjs';

/* global MissionUtils */
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
    const message = [];

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
    const restartBtn = document.querySelector('#game-restart-button');
    restartBtn.addEventListener('click', () => {
      this.computerInputNumbers = this.getComputerInputNumbers();
      this.initInput();
    });
  }

  getComputerInputNumbers() {
    const result = new Set();

    while (result.size < 3) {
      const pickedNumber = pickNumberInRange(1, 9);
      result.add(pickedNumber.toString());
    }

    return Array.from(result).join('');
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) {
      return HINT.CORRECT;
    }

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i += 1) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike += 1;
      } else if (userInputNumbers.indexOf(computerInputNumbers[i]) !== -1) {
        ball += 1;
      }
    }

    if (!strike && !ball) {
      return HINT.NOTHING;
    }

    const ballStr = ball ? `${ball}${HINT.BALL}` : `${EMPTY_STR}`;
    const strikeStr = strike ? `${strike}${HINT.STRIKE}` : `${EMPTY_STR}`;

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
