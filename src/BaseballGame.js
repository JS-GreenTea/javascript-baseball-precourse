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
}

export default BaseballGame;
