import { HINT, STRING } from './constants.mjs';

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

const joinHint = (ballCount, strikeCount) => {
  const ballHint = ballCount ? `${ballCount}${HINT.BALL}` : `${STRING.EMPTY}`;
  const strikeHint = strikeCount
    ? `${strikeCount}${HINT.STRIKE}`
    : `${STRING.EMPTY}`;

  return `${ballHint} ${strikeHint}`;
};

export { pickComputerInputNumbers, joinHint };
