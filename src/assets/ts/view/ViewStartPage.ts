import gameData from '../model/gameData';
import returnElement from './returnElement';
import ViewPage from './ViewPage';

const header = returnElement({
  tag: 'header',
  classes: ['header'],
});

const main = returnElement({
  tag: 'main',
  classes: ['main'],
});

const footer = returnElement({
  tag: 'footer',
  classes: ['footer'],
});

const pageName = 'startPage';

export default class ViewStartPage extends ViewPage {
  constructor() {
    super(pageName, header, main, footer);
    const buttonWrapper = returnElement({
      tag: 'div',
      classes: ['button-wrapper'],
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
      gameData.startPageButtons.buttonNewGame,
      gameData.startPageButtons.buttonLoadGame
    );
    this.main.append(buttonWrapper);
    this.body.classList.add('start__body');
  }
}
