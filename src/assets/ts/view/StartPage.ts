import returnElement from '../common/returnElement';
// import NewGame from '../model/NewGame';
import Header from './Header';

export default class StartPage {
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;
  // newGame: NewGame;

  constructor() {
    this.buttonNewGame = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Новая игра',
    });
    this.buttonLoadGame = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Загрузить игру',
    });
    // this.newGame = new NewGame();
  }

  startListenButtons() {
    // this.buttonNewGame.addEventListener('click', () => {this.hide(); this.newGame.start()});
    this.buttonLoadGame.addEventListener('click', () => console.log('load'));
  }

  stopListenButtons() {
    this.buttonNewGame.removeEventListener('click', () => console.log('new'));
    this.buttonLoadGame.removeEventListener('click', () => console.log('load'));
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
