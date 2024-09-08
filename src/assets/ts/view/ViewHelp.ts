import returnElement from './returnElement';

export default class ViewHelp {
  viewHelp: HTMLElement;
  constructor(description: string[]) {
    this.viewHelp = returnElement({
      tag: 'div',
      classes: ['help__block'],
    });
    const title = returnElement({
      tag: 'h2',
      classes: ['title', 'info__title'],
      textContent: 'Как играть',
    });
    this.viewHelp.append(title);
    for (let i = 0; i <= description.length; i += 1) {
      const paragraph = returnElement({
        tag: 'div',
        classes: ['info__paragraph'],
        textContent: description[i],
      });
      this.viewHelp.append(paragraph);
    }
  }

  hide = () => {
    if (!this.viewHelp.classList.contains('help__block_unactive')) {
      this.viewHelp.classList.add('help__block_unactive');
    }
  };

  show = () => {
    this.viewHelp.classList.remove('help__block_unactive');
  };

  returnBlock = () => {
    return this.viewHelp;
  };
}
