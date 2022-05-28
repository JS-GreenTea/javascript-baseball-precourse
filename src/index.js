const validateNumber = userInput => {
  if (typeof userInput !== 'number') {
    alert('잘못된 값을 입력하셨습니다.');
    return false;
  }
};

const submitButton = document.getElementById('submit');
const userInput = document.getElementById('user-input');
const resultMessage = document.getElementById('result');
const restartButton = document.getElementById('game-restart-button');

const init = () => {
  resultMessage.style.display = 'none';
  restartButton.style.display = 'none';
};

submitButton.addEventListener('click', event => {
  if (!validateNumber()) {
    userInput.value = '';
    userInput.focus();
  }
});

init();
