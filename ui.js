class UI {
  constructor() {}
  // Display list of all the characters
  showCharactersList(characters) {
    let output = "";
    let imgSource = "";
    characters.forEach((character) => {
      if (character.image === "") {
        imgSource = "assets/no-image-available.jpg";
      } else {
        imgSource = character.image;
      }

      // create crad element for each character and display it
      output = `<div class="card">
              <img
                src="${imgSource}"
                class="card-img-top d-block w-100 "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <span class="badge bg-primary">Actor: ${character.actor}</span>
                <span class="badge bg-info">Gender: ${character.gender}</span>
                <span class="badge bg-light">Date of birth: ${character.dateOfBirth}</span>
                <span class="badge bg-dark">House: ${character.house}</span>
                <span class="badge bg-success">Species: ${character.species}</span>
              </div>
            </div>`;
      const cardElement = document.createElement("div");
      cardElement.className = "col card-element";
      cardElement.innerHTML = output;
      const cardContainer = document.getElementById("cards-container");
      cardContainer.appendChild(cardElement);
    });
  }

  // Search for a specific character
  searchCharacter(e) {
    const cardTitle = document.querySelectorAll(".card-title");
    let userInput = document.querySelector("#user-input").value.toLowerCase();
    cardTitle.forEach((card) => {
      const name = card.textContent;
      if (name.toLowerCase().indexOf(userInput) == -1) {
        card.parentNode.parentNode.parentNode.style.display = "none";
      } else {
        card.parentNode.parentNode.parentNode.style.display = "block";
      }
    });
    e.preventDefault();
  }
}
