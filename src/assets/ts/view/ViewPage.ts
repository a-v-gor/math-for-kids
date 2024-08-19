import appPages from './appPages';
import returnElement from './returnElement';

export default abstract class ViewPage {
  body: HTMLBodyElement;
  header: HTMLElement;
  main: HTMLElement;
  footer: HTMLElement;
  pageName: string;

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
        appPages.startPage = this;
        break;
      case 'settingsPage':
        appPages.settingsPage = this;
        break;
    }
  };
  show() {
    this.body.append(this.header, this.main, this.footer);
  }
  hide() {
    this.body.innerHTML = '';
  }
}
