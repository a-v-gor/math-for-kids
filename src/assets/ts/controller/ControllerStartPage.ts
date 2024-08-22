import gameData from '../model/gameData';

export default class ControllerStartPage {
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;

  constructor() {
    this.buttonNewGame = <HTMLButtonElement>(
      gameData.viewStartPage?.buttonNewGame
    );
    this.buttonLoadGame = <HTMLButtonElement>(
      gameData.viewStartPage?.buttonLoadGame
    );
    gameData.controllerStartPage = this;
  }
  startNewGame() {
    gameData.viewStartPage?.hide();
    gameData.viewSettingsPage?.show();
  }
  startLoadGame() {
    console.log('load game');
  }
  startListenButtons() {
    console.log('start');

    this.buttonNewGame.addEventListener('click', () => {
      this.startNewGame();
    });
    this.buttonLoadGame.addEventListener('click', () => {
      this.startLoadGame();
    });
  }
}
