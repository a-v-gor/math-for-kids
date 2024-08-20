import gameData from '../model/gameData';
import appPages from '../view/appPages';

export default class ControllerStartPage {
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;

  constructor() {
    this.buttonNewGame = <HTMLButtonElement>appPages.startPage?.buttonNewGame;
    this.buttonLoadGame = <HTMLButtonElement>appPages.startPage?.buttonLoadGame;
    gameData.controllerStartPage = this;
  }
  startNewGame() {
    this.stopListenButtons();
    appPages.startPage?.hide();
    appPages.settingsPage?.show();
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
