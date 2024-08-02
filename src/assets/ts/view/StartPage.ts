import returnElement from '../common/returnElement';
import Game from '../model/Game';
import Header from './Header';

export default class StartPage {
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;
  game: Game;

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
    });
    this.game = new Game();
  }

  startListenButtons() {
    this.buttonNewGame.addEventListener('click', () => this.game.new());
    this.buttonLoadGame.addEventListener('click', () => this.game.load());
  }

  stopListenButtons() {
    this.buttonNewGame.removeEventListener('click', () => this.game.new());
    this.buttonLoadGame.removeEventListener('click', () => this.game.load());
  }

  show() {
    const startWrapper = returnElement({
      tag: 'div',
      classes: ['start__wrapper'],
    });
    const buttonWrapper = returnElement({
      tag: 'div',
      classes: ['start__button-wrapper'],
    });
    const header = new Header().return();
    const main = returnElement({
      tag: 'main',
      classes: ['start__main'],
    });
    buttonWrapper.append(this.buttonNewGame, this.buttonLoadGame);

    main.append(buttonWrapper);
    startWrapper.append(header, main);
    document.body.append(startWrapper);
    this.startListenButtons();
  }

  hide() {
    this.stopListenButtons();
    document.body.innerHTML = '';
  }
}
