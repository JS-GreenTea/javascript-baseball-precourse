import { DOM_ID, HINT, RESTART_TEMPLATE, STRING } from '../constants.mjs';
import { pickComputerInputNumbers, joinHint } from '../utils.mjs';

import validateUserInput from './validator.mjs';

export default class BaseballGame {
  constructor(inputView, resultView, submitBtn) {
    this.inputView = inputView;
    this.resultView = resultView;
    this.submitBtn = submitBtn;
    this.computerInputNumbers = pickComputerInputNumbers();

    this.submitBtn.addEventListener('click', this.inputSubmitEvent.bind(this));
    this.resultView.addEventListener('click', this.restartEvent.bind(this));
  }

  inputSubmitEvent(event) {
    event.preventDefault();

    const userInputNumbers = this.inputView.value;
    const validateResult = validateUserInput(userInputNumbers);

    if (validateResult.isError) {
      alert(validateResult.message.join(STRING.NEW_LINE));
      this.initInputView();
      return;
    }

    const playResult = this.play(this.computerInputNumbers, userInputNumbers);
    this.render(playResult);
  }

  restartEvent(event) {
    if (event.target.id === DOM_ID.RESTART) {
      this.computerInputNumbers = pickComputerInputNumbers();
      this.initInputView();
    }
  }

  initInputView() {
    this.inputView.value = STRING.EMPTY;
    this.inputView.focus();
  }

  initResultView() {
    this.resultView.innerHTML = STRING.EMPTY;
  }

  play(computerInputNumbers, userInputNumbers) {
    if (computerInputNumbers === userInputNumbers) {
      return HINT.CORRECT;
    }

    let ballCount = 0;
    let strikeCount = 0;

    for (let i = 0; i < computerInputNumbers.length; i += 1) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount += 1;
      } else if (userInputNumbers.indexOf(computerInputNumbers[i]) !== -1) {
        ballCount += 1;
      }
    }

    if (!strikeCount && !ballCount) {
      return HINT.NOTHING;
    }

    return joinHint(ballCount, strikeCount);
  }

  render(result) {
    this.resultView.innerHTML = result;

    if (result === HINT.CORRECT) {
      this.resultView.innerHTML += RESTART_TEMPLATE;
    }
  }
}
