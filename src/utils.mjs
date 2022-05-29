import { HINT, EMPTY_STR } from './constants.mjs';

const pickComputerInputNumbers = () => {
  /* global MissionUtils */
  const { pickNumberInRange } = MissionUtils.Random;
  const result = new Set();

  while (result.size < 3) {
    const pickedNumber = pickNumberInRange(1, 9);
    result.add(pickedNumber.toString());
  }

  return Array.from(result).join('');
};

const joinHint = (ball, strike) => {
  const ballStr = ball ? `${ball}${HINT.BALL}` : `${EMPTY_STR}`;
  const strikeStr = strike ? `${strike}${HINT.STRIKE}` : `${EMPTY_STR}`;

  return ballStr + strikeStr;
};

export { pickComputerInputNumbers, joinHint };
