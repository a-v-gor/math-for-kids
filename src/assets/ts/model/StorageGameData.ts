import GameData from './GameData';
import iExample from './iExample';
import iObjForLS from './iObjForLS';

export default class StorageGameData {
  saveToLS(gameData: GameData, example: iExample | null) {
    const dataObj: iObjForLS = {
      examples: gameData.getExamples(),
      mistakes: gameData.getMistakes(),
      operation: gameData.getOperation(),
      score: gameData.getScore(),
    };
    if (example !== null && !gameData.getExamples().includes(example)) {
      dataObj.examples.push(example);
    }
    const strToSave = JSON.stringify(dataObj);
    localStorage.setItem('gameData', strToSave);
  }

  loadFromLS = () => {
    const strFromLS = localStorage.getItem('gameData');
    return strFromLS;
  };
}
