const DOM_ID = {
  INPUT: 'user-input',
  SUBMIT: 'submit',
  RESULT: 'result',
  RESTART: 'game-restart-button',
};

const HINT = {
  BALL: '볼',
  STRIKE: '스트라이크',
  CORRECT: '🎉정답을 맞추셨습니다🎉',
  NOTHING: '낫싱',
};

const RESTART_TEMPLATE =
  '<p>게임을 새로 시작하겠습니까?</p><button id="game-restart-button">게임 재시작</button>';

const ALERT_MESSAGE = {
  DUPLICATE: '중복된 숫자가 있습니다.',
  INVALID_LENGTH: '3자리 숫자를 입력해주세요.',
  SPACE: '공백을 제외해주세요.',
  NAN: '숫자만 입력해주세요.',
};

const STRING = {
  EMPTY: '',
  NEW_LINE: '\n',
};

export { DOM_ID, HINT, RESTART_TEMPLATE, ALERT_MESSAGE, STRING };