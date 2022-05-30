import BallState from './ballState.js';

class BaseballGame {
  #ballState;
  constructor() {}
  play(computerInputNumbers, userInputNumbers) {
    this.#ballState = new BallState();
    userInputNumbers = String(userInputNumbers).split('');

    for (let [i, userInputNumber] of userInputNumbers.entries()) {
      if (this.isStrike(computerInputNumbers[i], userInputNumber)) {
        this.#ballState.addStrike();
        continue;
      }
      if (this.isBall(computerInputNumbers, userInputNumber)) {
        this.#ballState.addBall();
        continue;
      }
      this.#ballState.addNothing();
    }
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
}

export default BaseballGame;
