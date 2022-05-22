const isDuplicated = (number) => new Set(number).size !== number.length;
const isInvalidLength = (number) => number.length !== 3;
const includeSpace = (number) => (number.match(/ /gi) ? true : false);

export { isDuplicated, isInvalidLength, includeSpace };
