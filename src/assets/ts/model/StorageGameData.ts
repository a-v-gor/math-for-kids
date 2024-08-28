import GameData from './GameData';
import iExample from './iExample';
import iObjForLS from './iObjForLS';

export default class StorageGameData {
  saveToLS(gameData: GameData, example: iExample) {
    const dataObj: iObjForLS = {
      examples: [...gameData.getExamples(), example],
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
