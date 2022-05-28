class BallState {
  #strike;
  #ball;
  #nothing;

  constructor() {
    this.#strike = 0;
    this.#ball = 0;
    this.#nothing = 0;
  }

  get strike() {
    return this.#strike;
  }

  get ball() {
    return this.#ball;
  }

  get nothing() {
    return this.#nothing;
  }

  addStrike() {
    this.#strike += 1;
  }

  addBall() {
    this.#ball += 1;
  }

  addNothing() {
    this.#nothing += 1;
  }

  getAllBallCount() {
    return this.#strike + this.#ball + this.#nothing;
  }
}
