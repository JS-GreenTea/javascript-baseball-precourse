class BaseballGame {
  #ballState;
  constructor() {
    this.#ballState = new BallState();
  }
  isStrike(computerInputNumber, userInputNumber) {
    return computerInputNumber === userInputNumber;
  }
}

export default BaseballGame;
