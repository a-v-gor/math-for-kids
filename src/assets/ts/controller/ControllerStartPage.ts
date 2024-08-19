import gameData from '../model/gameData';
import appPages from '../view/appPages';
import returnElement from '../view/returnElement';

export default class ControllerStartPage {
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;

  constructor() {
    this.buttonNewGame = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Начать игру',
    });
    this.buttonLoadGame = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Продолжить игру',
      attrib: [{ name: 'disabled', value: '' }],
    });
    gameData.controllerStartPage = this;
  }
  startNewGame() {
    appPages.startPage?.hide();
    appPages.settingsPage?.show();
  }
  startLoadGame() {
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
