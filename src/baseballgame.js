/* eslint-disable no-undef */
import { SYS, CALL, LENGTH } from './constant.js';

export default class BaseballGame {
  play(computerInput, playerInput) {
    if (!this.isPlayerInputNumberValid(playerInput)) this.handleVaildError();
    return this.playResultByCount(
      this.countStrike(computerInput, playerInput),
      this.countBall(computerInput, playerInput)
    );
  }

  isPlayerInputNumberValid(playerInput) {
    const numReg = /[1-9]+/;
    if (this.isCompleteLength(playerInput)) return false;
    if (this.isCompleteNumber(playerInput, numReg)) return false;
    if (this.isDuplicateNumber(playerInput)) return false;
    return true;
  }

  handleVaildError() {
    this.alertErrorMessage();
    document.getElementById('user-input').innerText = '';
  }

  isCompleteLength(playerInput) {
    return playerInput.length !== LENGTH;
  }

  isCompleteNumber(playerInput, numReg) {
    return playerInput.match(numReg)[0].length !== LENGTH;
  }

  isDuplicateNumber(playerInput) {
    const countTable = this.countTableFor(playerInput);
    for (let i = 0; i < countTable.length; i += 1) {
      if (countTable[i] >= 2) return true;
    }
    return false;
  }

  countTableFor(playerInput) {
    const result = this.initCountTable();
    for (let i = 0; i < playerInput.length; i += 1) {
      result[playerInput[i]] += 1;
    }
    return result;
  }

  initCountTable() {
    const result = [];
    for (let i = 0; i < 11; i += 1) {
      result.push(0);
    }
    return result;
  }

  alertErrorMessage() {
    window.alert(SYS.INVALID_INPUT);
  }

  countStrike(computerInput, playerInput) {
    let strikeCount = 0;
    for (let i = 0; i < computerInput.length; i += 1) {
      if (computerInput[i] === playerInput[i]) strikeCount += 1;
    }
    return strikeCount;
  }

  countBall(computerInput, playerInput) {
    const strikeCount = this.countStrike(computerInput, playerInput);
    let ballMatchCount = 0;
    for (let i = 0; i < computerInput.length; i += 1) {
      if (playerInput.includes(computerInput[i])) ballMatchCount += 1;
    }
    return ballMatchCount - strikeCount;
  }

  playResultByCount(strikeCount, ballCount) {
    if (strikeCount === LENGTH) return CALL.WIN;
    if (strikeCount > 0 && ballCount > 0)
      return `${ballCount}${CALL.BALL} ${strikeCount}${CALL.STRIKE}`;
    if (strikeCount > 0 && ballCount === 0) return strikeCount + CALL.STRIKE;
    if (strikeCount === 0 && ballCount > 0) return ballCount + CALL.BALL;
    if (strikeCount === 0 && ballCount === 0) return CALL.NOTHING;
  }

  renderResult(playResult) {
    if (playResult === CALL.WIN) this.renderWin();
    if (playResult !== CALL.WIN) this.renderHint(playResult);
  }

  renderWin() {
    document.getElementById('game-restart-button').style.display = 'block';
    document.getElementById('result').innerText = SYS.WIN_MESSAGE;
  }

  renderHint(returnFormat) {
    document.getElementById('result').innerText = returnFormat;
  }
}
