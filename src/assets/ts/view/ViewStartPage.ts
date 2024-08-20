import returnElement from './returnElement';
import ViewPage from './ViewPage';

export default class ViewStartPage extends ViewPage {
  constructor() {
    super('startPage');
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
    buttonWrapper.append(this.buttonNewGame, this.buttonLoadGame);
    this.main.append(buttonWrapper);
  }
}
