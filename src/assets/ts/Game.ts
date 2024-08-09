import { data } from './data';
import returnElement from './returnElement';

export default class Game {
  example: HTMLDivElement;
  keysWrapper: HTMLDivElement;
  answerField: HTMLDivElement;
  infoBlock: HTMLDivElement;

  constructor() {
    this.example = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__text'],
      textContent: '00 + 00 =',
    });
    this.keysWrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['keys__wrapper'],
    });

    this.answerField = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__input'],
      textContent: '??',
    });
    this.infoBlock = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['game__info'],
      textContent: 'Введи число и нажми «✓»',
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
      this.keysWrapper.append(keyButton);
    }

    header.append(title);
    exampleWrapper.append(this.example, this.answerField);
    main.append(exampleWrapper, this.keysWrapper, this.infoBlock);
    body.append(header, main);
  }

  private checkAnswer() {
    if (Number(this.answerField.innerText) === data.current.answer) {
      this.infoBlock.innerText = 'Верно!';
      setTimeout(() => {
        this.infoBlock.innerText = 'Введи число и нажми «✓»';
        this.startNextExample();
      }, 1100);
    } else {
      this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
      this.answerField.innerText = '??';
    }
  }

  private checkPressedButton(event: Event) {
    const button = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
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
  }

  private listenNumButtons() {
    this.keysWrapper.addEventListener('click', (event: Event) =>
      this.checkPressedButton(event)
    );
  }

  private startNextExample() {
    if (data.examples.length > 0) {
      const nextExample = data.examples.pop();
      if (nextExample !== undefined) {
        data.current = nextExample;
        this.example.innerText = `${nextExample.example} =`;
        this.answerField.innerText = '??';
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
