export default class BaseballGame {
  play(computerInput, playerInput) {
    if (!this.isPlayerInputNumberValid(playerInput)) {
      this.alertErrorMessage();
      document.getElementById("user-input").innerText = "";
    }

    const [strikeCount, ballCount] = this.makeCompareResult(
      computerInput,
      playerInput
    );

    return this.setReturnFormat(strikeCount, ballCount);
  }

  makeCompareResult(computerInput, playerInput) {
    const strikeCount = this.countStrike(computerInput, playerInput);
    const ballCount = this.countBall(computerInput, playerInput, strikeCount);
    return [strikeCount, ballCount];
  }

  countBall(computerInput, playerInput, strikeCount) {
    let ballMatchCount = 0;

    for (let i = 0; i < computerInput.length; i++) {
      if (playerInput.includes(computerInput[i])) ballMatchCount++;
    }
    let ballCount = ballMatchCount - strikeCount;
    return ballCount;
  }

  countStrike(computerInput, playerInput) {
    let strikeCount = 0;
    for (let i = 0; i < computerInput.length; i++) {
      if (computerInput[i] === playerInput[i]) strikeCount++;
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

  isPlayerInputNumberValid(playerInput) {
    const numReg = /[\d]+/;

    if (playerInput.length !== 3) return false;

    if (playerInput.match(numReg)[0].length !== 3) return false;

    if (this.isDuplicateNumber(playerInput)) return false;

    return true;
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
    window.alert("유효하지 않은 입력입니다.");
  }
}
