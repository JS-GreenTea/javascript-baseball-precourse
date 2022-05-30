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

const countBallandStrike = (computerInputNumbers, userInputNumbers) => {
  let ballCount = 0;
  let strikeCount = 0;

  for (let i = 0; i < computerInputNumbers.length; i += 1) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount += 1;
    } else if (userInputNumbers.indexOf(computerInputNumbers[i]) !== -1) {
      ballCount += 1;
    }
  }

  return { ballCount, strikeCount };
};

const joinHint = (ballCount, strikeCount) => {
  const ballHint = ballCount ? `${ballCount}${HINT.BALL}` : `${STRING.EMPTY}`;
  const strikeHint = strikeCount
    ? `${strikeCount}${HINT.STRIKE}`
    : `${STRING.EMPTY}`;

  return `${ballHint} ${strikeHint}`;
};

export { pickComputerInputNumbers, countBallandStrike, joinHint };
