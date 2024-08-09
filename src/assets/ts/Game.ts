import { data } from './data';
import returnElement from './returnElement';

export default class Game {
  keyswrapper: HTMLDivElement;
  answerField: HTMLDivElement;

  constructor() {
    this.keyswrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['keys__wrapper'],
    });

    this.answerField = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__input'],
      textContent: '??',
    });
  }

  private show() {
    const body = document.body;
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
      classes: ['main', 'game__main'],
    });
    const exampleWrapper = returnElement({
      tag: 'div',
      classes: ['example__wrapper'],
    });
    const example = returnElement({
      tag: 'div',
      classes: ['example__text'],
      textContent: '00 + 00 =',
    });
    const keysTextsArr = [];
    for (let i = 1; i < 10; i += 1) {
      keysTextsArr.push(`${i}`);
    }
    keysTextsArr.push('×', '0', '✓');
    for (let i = 0; i < keysTextsArr.length; i += 1) {
      const classesArr = ['button', 'keys__button'];
      if (keysTextsArr[i] === '×') {
        classesArr.push('keys__cancel');
      }
      if (keysTextsArr[i] === '✓') {
        classesArr.push('keys__submit');
      }
      const keyButton = returnElement({
        tag: 'button',
        classes: classesArr,
        attrib: [
          {
            name: 'name',
            value: keysTextsArr[i],
          },
        ],
        textContent: keysTextsArr[i],
      });
      this.keyswrapper.append(keyButton);
    }

    header.append(title);
    exampleWrapper.append(example, this.answerField);
    main.append(exampleWrapper, this.keyswrapper);
    body.append(header, main);
  }

  private addNumToScreen(event: Event) {
    const button = <HTMLButtonElement>event.target;
    const value = button.name;
    if (value === '×') {
      this.answerField.innerText = '??';
    } else if (value === '✓') {
      console.log('answer is', this.answerField.innerText);
    } else if (
      (this.answerField.innerText.length > 1 &&
        this.answerField.innerText !== '10') ||
      this.answerField.innerText === '??'
    ) {
      this.answerField.innerText = value;
    } else {
      this.answerField.innerText += value;
    }
  }

  listenNumButtons() {
    this.keyswrapper.addEventListener('click', (event: Event) =>
      this.addNumToScreen(event)
    );
  }

  public start() {
    this.show();
    this.listenNumButtons();
  }
}
