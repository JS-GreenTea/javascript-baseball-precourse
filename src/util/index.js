const validateNumber = userInput => {
  if (userInput.match(/[0-9]/g).length !== 3) {
    alert('잘못된 값을 입력하셨습니다.');
    return false;
  }
  return true;
};

function $(query) {
  return document.querySelector(query);
}

export { validateNumber, $ };
