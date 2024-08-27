import GameData from './GameData';

export default class StorageGameData {
  gameData: GameData;

  constructor(data: GameData) {
    this.gameData = data;
  }

  saveToLS = () => {
    const objToSave = {
      examples: this.gameData.getControllerGamePage()?.arrExamples,
      mistakes: this.gameData.getMistakes(),
      operation: this.gameData.getOperation(),
    };
    const strToSave = JSON.stringify(objToSave);
    localStorage.setItem('gameData', strToSave);
  };
}
