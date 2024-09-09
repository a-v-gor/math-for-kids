import returnElement from './returnElement';

export default class ViewHelp {
  viewHelpBlock: HTMLElement;
  helpCloseButton: HTMLButtonElement;
  constructor(description: string[]) {
    this.viewHelpBlock = returnElement({
      tag: 'div',
      classes: ['help__block', 'information', 'information_unactive'],
    });
    const wrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'help__wrapper'],
    });
    const title = returnElement({
      tag: 'h2',
      classes: ['title', 'help__title'],
      textContent: 'Как играть',
    });
    wrapper.append(title);
    for (let i = 0; i < description.length; i += 1) {
      const paragraph = returnElement({
        tag: 'p',
        classes: ['help__paragraph'],
        textContent: description[i],
      });
      wrapper.append(paragraph);
    }

    this.helpCloseButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'help__close-button'],
      textContent: 'Закрыть',
    });
    wrapper.append(this.helpCloseButton);
    this.viewHelpBlock.append(wrapper);
  }

  hide = () => {
    if (!this.viewHelpBlock.classList.contains('information_unactive')) {
      this.viewHelpBlock.classList.add('information_unactive');
    }
  };

  show = () => {
    this.viewHelpBlock.classList.remove('information_unactive');
  };

  returnBlock = () => {
    return this.viewHelpBlock;
  };

  returnCloseButton = () => {
    return this.helpCloseButton;
  };
}
