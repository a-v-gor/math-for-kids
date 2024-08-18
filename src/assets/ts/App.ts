import ViewStartPage from './view/ViewStartPage';

export class App {
  start() {
    const startPage = new ViewStartPage();
    startPage.show();
    startPage.savePageToState();
  }
}
