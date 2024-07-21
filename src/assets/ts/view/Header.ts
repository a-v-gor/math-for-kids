import returnElement from '../common/returnElement';

export default class Header {
  headerElement: HTMLElement;

  constructor() {
    this.headerElement = returnElement({
      tag: 'header',
      classes: ['header'],
    });
    const titleWrapper = returnElement({
      tag: 'div',
      classes: ['header__title-wrapper'],
    });
    const title = returnElement({
      tag: 'h1',
      classes: ['header__title', 'title'],
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
    this.headerElement.append(titleWrapper);
  }
  return(): HTMLElement {
    return this.headerElement;
  }
}
