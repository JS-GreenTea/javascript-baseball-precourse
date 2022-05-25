const isDuplicated = (number) => new Set(number).size !== number.length;
const isInvalidLength = (number) => number.length !== 3;
const includeSpace = (number) => !!number.match(/ /gi);
const isNaN = (number) => Number.isNaN(Number(number));

export { isDuplicated, isInvalidLength, includeSpace, isNaN };
