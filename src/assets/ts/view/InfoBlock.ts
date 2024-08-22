import gameData from '../model/gameData';

export default class InfoBlock {
  infoBlock: HTMLDivElement;

  constructor() {
    this.infoBlock = <HTMLDivElement>gameData.viewGamePage?.infoBlock;
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
