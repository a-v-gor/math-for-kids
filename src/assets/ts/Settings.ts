import { data } from './data';
import Examples from './Examples';
import Game from './Game';
import returnElement from './returnElement';

export default class Settings {
  buttonWrapper: HTMLElement;
  game: Game;

  constructor() {
    this.buttonWrapper = returnElement({
      tag: 'div',
      classes: ['button-wrapper'],
    });
    this.game = new Game();
  }

  show() {
    const body = document.body;

    const wrapper = returnElement({
      tag: 'div',
      classes: ['wrapper'],
    });

    const header = returnElement({
      tag: 'header',
      classes: ['header'],
    });

    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: 'Новая игра',
    });

    header.append(title);

    const main = returnElement({
      tag: 'main',
      classes: ['main'],
    });

    const buttonSum = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '+ Сложение',
    });

    const buttonSubstr = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '- Вычитание',
    });

    const buttonMultiple = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '× Умножение',
    });

    this.buttonWrapper.append(buttonSum, buttonSubstr, buttonMultiple);
    main.append(this.buttonWrapper);
    wrapper.append(header, main);
    body.append(wrapper);
  }

  addData(event: Event) {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    const operationText = button.innerHTML.slice(0, 1);
    const examples = new Examples(operationText).return();
    data.examples.push(...examples);
    data.operation = button.innerHTML;
  }

  loadData() {
    const savedOperation = localStorage.getItem('math-for-kids');
    console.log(savedOperation);
  }

  addClickListener() {
    this.buttonWrapper.addEventListener('click', (event: Event) => {
      const button: HTMLButtonElement = <HTMLButtonElement>event.target;
      if (button.className === 'button') {
        this.addData(event);
        this.stop();
        this.game.start();
      }
    });
  }

  removeClickListener() {
    this.buttonWrapper.addEventListener('click', (event: Event) => {
      this.addData(event);
      this.stop();
      this.game.start();
    });
  }

  start() {
    this.show();
    this.addClickListener();
  }

  stop() {
    this.removeClickListener();
    document.body.innerHTML = '';
  }
}
