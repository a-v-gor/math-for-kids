import GameData from './GameData';
import iObjForLS from './iObjForLS';

export default class StorageGameData {
  saveToLS(gameData: GameData) {
    const dataObj: iObjForLS = {
      examples: gameData.getExamples(),
      mistakes: gameData.getMistakes(),
      operation: gameData.getOperation(),
    };
    const strToSave = JSON.stringify(dataObj);
    localStorage.setItem('gameData', strToSave);
  }

  loadFromLS = () => {
    const strFromLS = localStorage.getItem('gameData');
    return strFromLS;
  };
}
