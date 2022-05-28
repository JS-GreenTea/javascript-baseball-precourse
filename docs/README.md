### 기능 요구사항
- [x] HTML을 관리하기 위한 초기 작업을 시행한다.
- [x] 각각 다른 임의의 숫자를 3개 만든다.
- [x] 잘못된 입력 값을 검증한다.
  - [x] alert로 에러메세지를 보낸다.
  - [x] input box로 focus한다.
- [x] 확인 버튼을 활성화한다.


- [x] ball의 상태를 관리하는 BallState 클래스를 만든다.
  - [x] strike, ball, nothing에 각각 +1을 한다.
  - [x] 각 프로퍼티의 합을 반환한다.


- [x] game을 진행하는 BaseballGame 클래스를 만든다.
  - [ ] 컴퓨터 입력과 사용자 입력을 받아 게임을 진행한다.
  - [ ] play 마다 이겼는지 확인한다.
  - [x] strike인지 확인한다.
  - [ ] ball인지 확인한다.
  - [ ] ballState를 string으로 반환한다.
  - [ ] play 시 결과값을 render 한다.
    - [ ] 이겼을 때 render한다.
    - [ ] 졌을 때 render한다.
  - [ ] 이겼을 때 재시작 버튼을 누르기 전까지 확인버튼을 비활성화한다.