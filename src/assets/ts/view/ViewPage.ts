import GameData from '../model/GameData';
import returnElement from './returnElement';

export default abstract class ViewPage {
  gameData: GameData;
  body: HTMLBodyElement;
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
  pageName: string;
  buttonNewGame?: HTMLButtonElement;
  buttonLoadGame?: HTMLButtonElement;
  buttonSetSum?: HTMLButtonElement;
  buttonSetSubstr?: HTMLButtonElement;
  buttonSetMultiple?: HTMLButtonElement;
  title?: HTMLElement;
  infoBlock?: HTMLDivElement;
  example?: HTMLDivElement;
  answerField?: HTMLDivElement;
  keysWrapper?: HTMLDivElement;
  updateTitle?: (value: string) => void;
  navHome?: HTMLLIElement;

  constructor(name: string, data: GameData) {
    this.body = <HTMLBodyElement>document.body;
    this.header = returnElement({
      tag: 'header',
      classes: ['header'],
    });

    this.main = returnElement({
      tag: 'main',
      classes: ['main'],
    });

    this.footer = returnElement({
      tag: 'footer',
      classes: ['footer'],
    });
    this.pageName = name;
    this.gameData = data;
  }
  show = () => {
    this.body.append(this.header, this.main, this.footer);
    if (this.pageName === 'startPage' && this.gameData.getExamples.length > 0) {
      const buttonLoadGame = <HTMLButtonElement>this.buttonLoadGame;
      buttonLoadGame.disabled = false;
    }
  };
  hide() {
    this.body.innerHTML = '';
  }
}
