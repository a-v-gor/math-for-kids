import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewPage from './ViewPage';

export default class ViewStartPage extends ViewPage {
  buttonNewGame: HTMLButtonElement;

  constructor(gameData: GameData) {
    super('startPage', gameData);
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
    this.buttonRecords = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Рекорды',
    });
    const buttonWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'button-wrapper'],
    });
    const titleWrapper = returnElement({
      tag: 'div',
      classes: ['header__title-wrapper'],
    });
    const title = returnElement({
      tag: 'h1',
      classes: ['title', 'header__title'],
    });
    const titleString = 'Юный математик';
    titleString.split('').map((letter) => {
      if (!letter.match(/\s/)) {
        const letterElement = returnElement({
          tag: 'span',
          classes: ['title__letter'],
          textContent: letter,
        });
        title.append(letterElement);
      } else {
        title.append(letter);
      }
    });

    titleWrapper.append(title);
    this.header.append(titleWrapper);
    buttonWrapper.append(
      this.buttonNewGame,
      this.buttonLoadGame,
      this.buttonRecords
    );
    this.main.append(buttonWrapper);
  }
}
