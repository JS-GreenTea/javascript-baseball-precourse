import BallState from './ballState.js';

class BaseballGame {
  #ballState;
  constructor() {}
  play(computerInputNumbers, userInputNumbers) {
    this.#ballState = new BallState();
    userInputNumbers = String(userInputNumbers);
    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (this.isStrike(computerInputNumbers[i], userInputNumbers[i])) {
        this.#ballState.addStrike();
        continue;
      }
      if (this.isBall(computerInputNumbers, userInputNumbers[i])) {
        this.#ballState.addBall();
        continue;
      }
      this.#ballState.addNothing();
    }
    this.announceBallState();
    return this.ballStateToString();
  }

  isWin() {
    return this.#ballState.strike === 3;
  }

  isStrike(computerInputNumber, userInputNumber) {
    return computerInputNumber === userInputNumber;
  }

  isBall(computerInputNumbers, userInputNumber) {
    return computerInputNumbers
      .split('')
      .find(number => number === userInputNumber);
  }

  ballStateToString() {
    let result = '';
    if (this.#ballState.ball) result += `${this.#ballState.ball}볼 `;
    if (this.#ballState.strike) result += `${this.#ballState.strike}스트라이크`;
    if (this.#ballState.nothing === 3) result = '낫싱';
    return result.trim();
  }

  announceBallState() {
    let resultMessage = this.ballStateToString();
    if (this.isWin()) {
      resultMessage =
        '<strong>🎉정답을 맞추셨습니다🎉</strong><br>' +
        '게임을 다시 시작하겠습니까?';
    }
    return resultMessage;
  }
}

export default BaseballGame;
