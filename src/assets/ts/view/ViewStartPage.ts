import gameData from '../model/gameData';
import returnElement from './returnElement';
import ViewPage from './ViewPage';

export default class ViewStartPage extends ViewPage {
  constructor() {
    super('startPage');
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

    if (gameData.controllerStartPage !== null) {
      buttonWrapper.append(
        gameData.controllerStartPage?.buttonNewGame,
        gameData.controllerStartPage?.buttonLoadGame
      );
    }
    this.main.append(buttonWrapper);
  }
}
