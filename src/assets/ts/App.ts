import StartPage from './view/StartPage';

export class App {
  start() {
    const startPage = new StartPage();
    startPage.show();
  }
}
