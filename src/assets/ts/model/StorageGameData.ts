import GameData from './GameData';
import iExample from './iExample';
import iObjForLS from './iObjForLS';

export default class StorageGameData {
  saveToLS(gameData: GameData, example: iExample | null) {
    const dataObj: iObjForLS = {
      examples: gameData.getExamples(),
      gameTime: gameData.getGameTime(),
      mistakes: gameData.getMistakes(),
      numExamples: gameData.getNumExamples(),
      numMistakes: gameData.getNumMistakes(),
      operation: gameData.getOperation(),
      score: gameData.getScore(),
      records: gameData.getRecords(),
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
