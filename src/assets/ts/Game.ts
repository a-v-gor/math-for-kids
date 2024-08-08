import { data } from './data';
import returnElement from './returnElement';

export default class Game {
  private show() {
    const body = document.body;
    const wrapper = returnElement({
      tag: 'div',
      classes: ['wrapper'],
    });
    const header = returnElement({
      tag: 'div',
      classes: ['header'],
    });
    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: data.operation,
    });
    const main = returnElement({
      tag: 'div',
      classes: ['main'],
    });
    const exampleWrapper = returnElement({
      tag: 'div',
      classes: ['example__wrapper'],
    });
    const example = returnElement({
      tag: 'p',
      classes: ['example__text'],
      textContent: '00 + 00',
    });
    const form = returnElement({
      tag: 'form',
      classes: ['example__form'],
    });
    const inputField = returnElement({
      tag: 'input',
      classes: ['example__input'],
      attrib: [
        {
          name: 'type',
          value: 'number',
        },
        {
          name: 'name',
          value: 'answer',
        },
        {
          name: 'inputmode',
          value: 'numeric',
        },
        {
          name: 'min',
          value: '0',
        },
        {
          name: 'max',
          value: '100',
        },
        {
          name: 'autofocus',
          value: '',
        },
      ],
    });
    const keysWrapper = returnElement({
      tag: 'div',
      classes: ['keys__wrapper'],
    });
    const keysTextsArr = [];
    for (let i = 1; i < 10; i += 1) {
      keysTextsArr.push(`${i}`);
    }
    keysTextsArr.push('✖', '0', '✔');
    for (let i = 0; i < keysTextsArr.length; i += 1) {
      const keyButton = returnElement({
        tag: 'button',
        classes: ['button', 'keys__button'],
        attrib: [
          {
            name: 'name',
            value: keysTextsArr[i],
          },
        ],
        textContent: keysTextsArr[i],
      });
      keysWrapper.append(keyButton);
    }

    header.append(title);
    form.append(inputField);
    exampleWrapper.append(example, form);
    main.append(exampleWrapper, keysWrapper);
    wrapper.append(header, main);
    body.append(wrapper);
  }

  public start() {
    this.show();
  }
}
