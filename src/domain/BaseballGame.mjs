import { HINT, EMPTY_STR, RESTART_TEMPLATE } from '../constants.mjs';
import { pickComputerInputNumbers, joinHint } from '../utils.mjs';
import { validateUserInput } from './validator.mjs';

export default class BaseballGame {
  constructor(input, result, submitBtn) {
    this.input = input;
    this.result = result;
    this.submitBtn = submitBtn;

    this.computerInputNumbers = pickComputerInputNumbers();

    this.submitBtn.addEventListener('click', this.inputSubmitEvent.bind(this));
  }

  inputSubmitEvent(event) {
    event.preventDefault();

    const userInputNumbers = this.input.value;
    const validateResult = validateUserInput(userInputNumbers);

    if (validateResult.isError) {
      alert(validateResult.message.join('\n'));
      this.initInput();
      return;
    }

    const playResult = this.play(this.computerInputNumbers, userInputNumbers);
    this.render(playResult);
  }

  initInput() {
    this.input.value = EMPTY_STR;
    this.result.innerHTML = EMPTY_STR;
  }

  bindRestartEvent() {
    const restartBtn = document.querySelector('#game-restart-button');
    restartBtn.addEventListener('click', () => {
      this.computerInputNumbers = pickComputerInputNumbers();
      this.initInput();
    });
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

    return joinHint(ball, strike);
  }

  render(resultStr) {
    this.result.innerHTML = resultStr;

    if (resultStr === HINT.CORRECT) {
      this.result.innerHTML += RESTART_TEMPLATE;
      this.bindRestartEvent();
    }
  }
}
