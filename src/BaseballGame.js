class BaseballGame {
  #ballState;
  constructor() {
    this.#ballState = new BallState();
  }
  play(computerInputNumbers, userInputNumbers) {
    computerInputNumbers = String(computerInputNumbers);
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
