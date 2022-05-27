import { SYS, CALL } from "./constant.js";

export default class BaseballGame {
  play(computerInput, playerInput) {
    if (!this.isPlayerInputNumberValid(playerInput)) {
      this.alertErrorMessage();
      document.getElementById("user-input").innerText = "";
    }
    const strikeCount = this.countStrike(computerInput, playerInput);
    const ballCount = this.countBall(computerInput, playerInput, strikeCount);

    return this.setReturnFormat(strikeCount, ballCount);
  }

  countBall(computerInput, playerInput, strikeCount) {
    let ballMatchCount = 0;
    for (let i = 0; i < computerInput.length; i++) {
      if (playerInput.includes(computerInput[i])) ballMatchCount++;
    }
    return ballMatchCount - strikeCount;
  }

  countStrike(computerInput, playerInput) {
    let strikeCount = 0;
    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput[i] === playerInput[i]) strikeCount++;
    }
    return strikeCount;
  }

  setReturnFormat(strikeCount, ballCount) {
    if (strikeCount === 3) return CALL["WIN"];
    if (strikeCount > 0 && ballCount > 0)
      return ballCount + CALL["BALL"] + " " + strikeCount + CALL["STRIKE"];
    if (strikeCount > 0 && ballCount === 0) return strikeCount + CALL["STRIKE"];
    if (strikeCount === 0 && ballCount > 0) return ballCount + CALL["BALL"];
    if (strikeCount === 0 && ballCount === 0) return CALL["NOTHING"];
  }

  decideResult(returnFormat) {
    if (returnFormat === CALL["WIN"]) {
      document.getElementById("game-restart-button").style.display = "block";
      this.printWin();
      return;
    }
    this.printHint(returnFormat);
  }

  printHint(returnFormat) {
    document.getElementById("result").innerText = returnFormat;
  }

  printWin() {
    document.getElementById("result").innerText = SYS["WIN_MESSAGE"];
  }

  isPlayerInputNumberValid(playerInput) {
    const numReg = /[1-9]+/;

    if (this.isCompleteLength(playerInput)) return false;

    if (this.isCompleteNumber(playerInput, numReg)) return false;

    if (this.isDuplicateNumber(playerInput)) return false;

    return true;
  }

  isCompleteLength(playerInput) {
    return playerInput.length !== 3;
  }

  isCompleteNumber(playerInput, numReg) {
    return playerInput.match(numReg)[0].length !== 3;
  }

  isDuplicateNumber(playerInput) {
    const duplicateCountTable = [];
    for (let i = 0; i < 11; i++) {
      duplicateCountTable.push(0);
    }

    for (let i = 0; i < playerInput.length; i++) {
      duplicateCountTable[playerInput[i]]++;
    }

    for (let i = 0; i < duplicateCountTable.length; i++) {
      if (duplicateCountTable[i] >= 2) return true;
    }

    return false;
  }

  alertErrorMessage() {
    window.alert(SYS["INVALID_INPUT"]);
  }
}
