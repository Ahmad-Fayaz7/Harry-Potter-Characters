//Fetch character's data from API

class Harrypotter {
  async getCharacters() {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const charatersData = await response.json();
    return charatersData;
  }
}
