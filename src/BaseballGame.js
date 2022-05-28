class BaseballGame {
  #ballState;
  constructor() {
    this.#ballState = new BallState();
  }

  isStrike(computerInputNumber, userInputNumber) {
    return computerInputNumber === userInputNumber;
  }

  isBall(computerInputNumbers, userInputNumber) {
    return computerInputNumbers.find(number => number === userInputNumber);
  }

  ballStateToString() {
    let result = '';
    if (this.#ballState.ball) result += `${this.#ballState.ball}볼`;
    if (this.#ballState.strike) result += `${this.#ballState.strike}스트라이크`;
    if (this.#ballState.nothing === 3) result = '낫싱';
    return result;
  }
}

export default BaseballGame;
