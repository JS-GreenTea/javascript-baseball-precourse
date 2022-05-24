export default class Player {
  constructor() {
    this.number;
    document
      .getElementById("submit")
      .addEventListener("click", this.getNumberByInputTag);
  }

  getNumberByInputTag() {
    const userInput = document.getElementById("user-input");
    this.number = userInput.value;
  }
}
