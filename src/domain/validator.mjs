import { ALERT_MESSAGE } from '../constants.mjs';

const isDuplicated = (value) => new Set(value).size !== value.length;
const isInvalidLength = (value) => value.length !== 3;
const includeSpace = (value) => !!value.match(/ /gi);
const isNaN = (value) => Number.isNaN(Number(value));

const validateUserInput = (value) => {
  const message = [];

  if (isNaN(value)) {
    message.push(ALERT_MESSAGE.NAN);
  }
  if (includeSpace(value)) {
    message.push(ALERT_MESSAGE.SPACE);
  }
  if (isDuplicated(value)) {
    message.push(ALERT_MESSAGE.DUPLICATE);
  }
  if (isInvalidLength(value)) {
    message.push(ALERT_MESSAGE.INVALID_LENGTH);
  }

  return { isError: message.length !== 0, message };
};

export {
  isDuplicated,
  isInvalidLength,
  includeSpace,
  isNaN,
  validateUserInput,
};
