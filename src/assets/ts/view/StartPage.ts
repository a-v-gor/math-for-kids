import gameData from '../model/gameData';
import returnElement from './returnElement';
import ViewPage from './ViewPage';

export default class StartPage extends ViewPage {
  header: HTMLElement;
  main: HTMLElement;

  constructor() {
    super();
    const buttonWrapper = returnElement({
      tag: 'div',
      classes: ['button-wrapper'],
    });
    this.header = returnElement({
      tag: 'header',
      classes: ['header'],
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
    this.main = returnElement({
      tag: 'main',
      classes: ['main'],
    });

    buttonWrapper.append(
      gameData.startPageButtons.buttonNewGame,
      gameData.startPageButtons.buttonLoadGame
    );
    this.main.append(buttonWrapper);
  }

  show() {
    this.clear();
    this.body.classList.add('start__body');
    this.body.append(this.header, this.main);
  }
}
