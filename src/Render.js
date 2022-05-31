import { $ } from './util';
const userInput = $('#user-input');
const resultMessage = $('#result');
const restartButton = $('#game-restart-button');

class Render {
  #baseballGame;
  constructor(baseballGame) {
    this.#baseballGame = baseballGame;
  }

  gameResult(gameResultToString) {
    resultMessage.innerHTML = gameResultToString;
    if (this.#baseballGame.isWin()) {
      userInput.focus();
      restartButton.style.display = 'block';
      resultMessage.innerHTML =
        '<strong>🎉정답을 맞추셨습니다🎉</strong><br>' +
        '게임을 다시 시작하겠습니까?';
    }
  }

  gameReset() {
    resultMessage.innerText = '';
    userInput.value = '';
    restartButton.style.display = 'none';
  }
}

export default Render;
