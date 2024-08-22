import gameData from '../model/gameData';
import returnElement from './returnElement';

export default abstract class ViewPage {
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

  constructor(name: string) {
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
  }
  savePageToState = () => {
    switch (this.pageName) {
      case 'startPage':
        gameData.viewStartPage = this;
        break;
      case 'settingsPage':
        gameData.viewSettingsPage = this;
        break;
      case 'gamePage':
        gameData.viewGamePage = this;
        break;
    }
  };
  show() {
    this.body.append(this.header, this.main, this.footer);
    console.log(gameData);

    // if (this.pageName === 'startPage' && gameData.operation.length > 0 && this.buttonLoadGame !== undefined) {
    //   this.buttonLoadGame.disabled = true;
    // }
  }
  hide() {
    this.body.innerHTML = '';
  }
}
