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
    this.stopListenButtons();
    gameData.viewStartPage?.hide();
    gameData.viewSettingsPage?.show();
    gameData.controllerSettingsPage?.startListenButtons();
  }
  startLoadGame() {
    this.stopListenButtons();
    console.log('load game');
  }
  startListenButtons() {
    this.buttonNewGame.addEventListener('click', () => {
      this.startNewGame();
    });
    this.buttonLoadGame.addEventListener('click', () => {
      this.startLoadGame();
    });
  }
  stopListenButtons() {
    this.buttonNewGame.addEventListener('click', () => {
      this.startNewGame();
    });
    this.buttonLoadGame.addEventListener('click', () => {
      this.startLoadGame();
    });
  }
}
