import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewFooter from './ViewFooter';
import ViewHelp from './ViewHelp';

export default abstract class ViewPage {
  body: HTMLBodyElement;
  buttonLoadGame?: HTMLButtonElement;
  buttonRecords?: HTMLButtonElement;
  buttonSetFix?: HTMLButtonElement;
  footer: HTMLElement;
  gameData: GameData;
  header: HTMLElement;
  main: HTMLElement;
  navHelp?: HTMLLIElement | undefined;
  navHome?: HTMLLIElement | undefined;
  pageName: string;
  updateTitle?: (value: string) => void;
  viewHelp?: ViewHelp;

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

    const viewFooter = new ViewFooter();

    this.footer = viewFooter.return();
    this.pageName = name;
    this.gameData = data;
  }
  show = () => {
    this.body.append(this.header, this.main, this.footer);

    if (this.pageName === 'startPage') {
      const buttonLoadGame = <HTMLButtonElement>this.buttonLoadGame;
      const buttonRecords = <HTMLButtonElement>this.buttonRecords;
      if (
        this.gameData.getExamples() === null ||
        this.gameData.getExamples().length === 0
      ) {
        buttonLoadGame.disabled = true;
      } else {
        buttonLoadGame.disabled = false;
      }
      if (this.gameData.getRecords()?.length > 0) {
        buttonRecords.disabled = false;
      } else {
        buttonRecords.disabled = true;
      }
    }

    if (this.pageName === 'settingsPage') {
      const fixButton = <HTMLButtonElement>this.buttonSetFix;
      if (this.gameData.getMistakes().length === 0) {
        fixButton.disabled = true;
      } else {
        fixButton.disabled = false;
      }
    }

    if (this.pageName === 'gamePage') {
      const updateTitle = this.gameData.getViewGamePage()?.updateTitle;
      if (updateTitle !== undefined) {
        updateTitle(this.gameData.getOperation());
      }
      this.gameData.getViewGamePage()?.updateScore();
    }

    if (this.pageName === 'recordsPage') {
      this.gameData.getViewRecordsPage()?.updateRecords();
    }
  };
  hide() {
    this.body.innerHTML = '';
  }
}
