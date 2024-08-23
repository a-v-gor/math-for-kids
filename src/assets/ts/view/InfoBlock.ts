import GameData from '../model/GameData';

export default class InfoBlock {
  infoBlock: HTMLDivElement;

  constructor(gameData: GameData) {
    this.infoBlock = <HTMLDivElement>gameData.getViewGamePage()?.infoBlock;
  }

  showRightAnswer() {
    this.infoBlock.innerText = 'Верно!';
  }

  showWrongAnswer() {
    this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
  }

  showInstruction() {
    this.infoBlock.innerText = 'Введи число и нажми «✓».';
  }
}
