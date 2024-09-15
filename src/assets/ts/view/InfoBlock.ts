import GameData from '../model/GameData';

export default class InfoBlock {
  infoBlock: HTMLDivElement;
  gameData: GameData;

  constructor(data: GameData) {
    this.gameData = data;
    this.infoBlock = <HTMLDivElement>this.gameData.getViewGamePage()?.infoBlock;
  }

  showRightAnswer = () => {
    this.infoBlock.innerText = 'Верно!';
  };

  showWrongAnswer = () => {
    this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
  };

  showInstruction = () => {
    this.infoBlock.innerText = 'Введи число и нажми «✓».';
  };

  showStatistics = () => {
    const examplesNum = this.gameData.getExamples().length;
    const examplesWord =
      examplesNum % 10 === 1 &&
      (examplesNum < 10 || examplesNum > 20) &&
      examplesNum % 100 !== 11
        ? 'пример'
        : examplesNum % 10 < 5 &&
            (examplesNum % 100 < 10 || examplesNum % 100 > 20) &&
            examplesNum % 100 !== 0
          ? 'примера'
          : 'примеров';
    this.infoBlock.innerHTML = `Осталось решить <br/><span class="game__statistics">${examplesNum}</span> ${examplesWord}.`;
  };

  showEndGame = () => {
    this.infoBlock.innerText = 'Все примеры решены.';
  };
}
