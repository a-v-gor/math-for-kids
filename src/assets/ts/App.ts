import StartPage from './view/StartPage';

export class App {
  start() {
    console.log('start app');
    const startPage = new StartPage();
    startPage.show();
  }
}
