export default class Player {
  constructor() {
    this.number;
  }

  getNumberByInputTag() {
    const userInput = document.getElementById("user-input");
    this.number = userInput.value;
  }
}
