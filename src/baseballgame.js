class BaseballGame {
  play(computerInputNumber, playerInputNumber) {
    // playerInputNumber 의 유효성 판단
    // computerNumber와 playInputNumber를 비교
    return "";
  }

  decideResult() {
    //play의 결과에 따라 return 값이 달라진다.
    //사용자가 game에서 승리하지 않았을 시 false 리턴해 hint를 출력하고 play를 반복 수행하게 한다.
    //사용자가 game에서 승리할 경우 true를 리턴헤 replay를 할 수 있게 한다.
  }

  printHint() {
    //힌트를 출력한다.
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
      if (duplicateCountTable[i] >= 2) return false;
    }

    return true;
  }

  alertErrorMessage() {
    window.alert("유효하지 않은 입력입니다.");
  }
}
