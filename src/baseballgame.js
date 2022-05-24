export default class BaseballGame {
  play(computerInputNumber, playerInputNumber) {
    if (!this.isPlayerInputNumberValid(playerInputNumber)) {
      this.alertErrorMessage();
      document.getElementById("user-input").innerText = "";
    }

    const [strikeCount, ballCount] = this.makeCompareResult(
      computerInputNumber,
      playerInputNumber
    );

    return this.setReturnFormat(strikeCount, ballCount);
  }

  makeCompareResult(computerInputNumber, playerInputNumber) {
    const strikeCount = this.countStrike(
      computerInputNumber,
      playerInputNumber
    );
    const ballCount = this.countBall(
      computerInputNumber,
      playerInputNumber,
      strikeCount
    );
    return [strikeCount, ballCount];
  }

  countBall(computerInputNumber, playerInputNumber, strikeCount) {
    let ballMatchCount = 0;

    for (let i = 0; i < computerInputNumber.length; i++) {
      if (playerInputNumber.includes(computerInputNumber[i])) ballMatchCount++;
    }
    let ballCount = ballMatchCount - strikeCount;
    return ballCount;
  }

  countStrike(computerInputNumber, playerInputNumber) {
    let strikeCount = 0;
    for (let i = 0; i < computerInputNumber.length; i++) {
      if (computerInputNumber[i] === playerInputNumber[i]) strikeCount++;
    }
    return strikeCount;
  }

  setReturnFormat(strikeCount, ballCount) {
    if (strikeCount === 3) return "승리";
    if (strikeCount > 0 && ballCount > 0)
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    if (strikeCount > 0 && ballCount === 0) return `${strikeCount}스트라이크`;
    if (strikeCount === 0 && ballCount > 0) return `${ballCount}볼`;
    if (strikeCount === 0 && ballCount === 0) return "낫싱";
  }

  decideResult(returnFormat) {
    if (returnFormat === "승리") {
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
    document.getElementById("result").innerText = " 정답을 맞추셨습니다 ~ ㅊㅊ";
  }

  isPlayerInputNumberValid(playerInputNumber) {
    const numReg = /[\d]+/;

    if (playerInputNumber.length !== 3) return false;

    if (playerInputNumber.match(numReg)[0].length !== 3) return false;

    if (this.isDuplicateNumber(playerInputNumber)) return false;

    return true;
  }

  isDuplicateNumber(playerInputNumber) {
    const duplicateCountTable = [];
    for (let i = 0; i < 11; i++) {
      duplicateCountTable.push(0);
    }

    for (let i = 0; i < playerInputNumber.length; i++) {
      duplicateCountTable[playerInputNumber[i]]++;
    }

    for (let i = 0; i < duplicateCountTable.length; i++) {
      if (duplicateCountTable[i] >= 2) return true;
    }

    return false;
  }

  alertErrorMessage() {
    window.alert("유효하지 않은 입력입니다.");
  }
}
