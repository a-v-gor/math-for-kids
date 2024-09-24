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
    this.infoBlock.classList.add('game-info__correct');
  };

  showWrongAnswer = () => {
    this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
    this.infoBlock.classList.add('game-info__wrong');
  };

  unstyleInfoBlock = () => {
    if(this.infoBlock.classList.contains('game-info__correct')) {
      this.infoBlock.classList.remove('game-info__correct')
    }
    if(this.infoBlock.classList.contains('game-info__wrong')) {
      this.infoBlock.classList.remove('game-info__wrong')
    }
  }

  showInstruction = () => {
    this.unstyleInfoBlock();
    this.infoBlock.innerText = 'Введи число и нажми «✓».';
  };

  showStatistics = () => {
    this.unstyleInfoBlock();
    const examplesNum = this.gameData.getExamples().length;
    const i = examplesNum % 100;
    const examplesWord =
      i % 10 === 1 && (i < 10 || i > 20) && i !== 11
        ? 'пример'
        : i % 10 < 5 && i % 10 > 0 && (i < 10 || i > 20)
          ? 'примера'
          : 'примеров';
    this.infoBlock.innerHTML = `Осталось решить <br/><span class="game__statistics">${examplesNum}</span> ${examplesWord}.`;
  };

  showEndGame = () => {
    this.infoBlock.innerText = 'Все примеры решены.';
  };
}
