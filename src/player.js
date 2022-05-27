export default class Player {
  constructor() {
    this.number;
  }

  getNumberByInputTag() {
    this.number = document.getElementById("user-input").value;
  }
}
