//Fetch character's data from API

class Harrypotter {
  async getCharacters() {
    const response = await fetch("http://hp-api.herokuapp.com/api/characters");
    const charatersData = await response.json();
    return charatersData;
  }
}
