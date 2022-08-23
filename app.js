const harryPotter = new Harrypotter();
const ui = new UI();
document.addEventListener("DOMContentLoaded", (e) => {
  harryPotter.getCharacters().then((data) => ui.showCharactersList(data));
});
document.querySelector("#user-input").addEventListener("keyup", (e) => {
  ui.searchCharacter(e);
});
