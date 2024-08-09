import { data } from './data';
import returnElement from './returnElement';

export default class Game {
  example: HTMLDivElement;
  keyswrapper: HTMLDivElement;
  answerField: HTMLDivElement;

  constructor() {
    this.example = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__text'],
      textContent: '00 + 00 =',
    });
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
    exampleWrapper.append(this.example, this.answerField);
    main.append(exampleWrapper, this.keyswrapper);
    body.append(header, main);
  }

  private checkAnswer() {
    if (Number(this.answerField.innerText) === data.current.answer) {
      console.log('correct!');
    } else {
      console.log('incorrect :(');
    }
  }

  private checkPressedButton(event: Event) {
    const button = <HTMLButtonElement>event.target;
    const value = button.name;
    switch (value) {
      case '×':
        this.answerField.innerText = '??';
        break;
      case '✓':
        this.checkAnswer();
        break;
      default:
        if (
          (this.answerField.innerText.length > 1 &&
            this.answerField.innerText !== '10') ||
          this.answerField.innerText === '??'
        ) {
          this.answerField.innerText = value;
        } else {
          this.answerField.innerText += value;
        }
    }
  }

  private listenNumButtons() {
    this.keyswrapper.addEventListener('click', (event: Event) =>
      this.checkPressedButton(event)
    );
  }

  private startNextExample() {
    if (data.examples.length > 0) {
      const nextExample = data.examples.pop();
      if (nextExample !== undefined) {
        data.current = nextExample;
        this.example.innerText = `${nextExample.example} =`;
      } else {
        console.log('example is undefined');
      }
    } else {
      console.log('no examples in array');
    }
  }

  public start() {
    this.show();
    this.listenNumButtons();
    this.startNextExample();
  }
}
