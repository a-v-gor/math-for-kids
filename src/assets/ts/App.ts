import ControllerStartPage from './controller/ControllerStartPage';
// import gameData from './model/gameData';
import appPages from './view/appPages';
// import ViewSettingsPage from './view/ViewSettingsPage';
import ViewStartPage from './view/ViewStartPage';

export class App {
  viewStartPage: ViewStartPage;
  controllerStartPage: ControllerStartPage;
  constructor() {
    this.controllerStartPage = new ControllerStartPage();
    this.viewStartPage = new ViewStartPage();
  }

  private addPagesViews() {
    // const viewSettingsPage = new ViewSettingsPage();
    this.viewStartPage.savePageToState();
    // viewSettingsPage.savePageToState();
  }

  start() {
    this.addPagesViews();
    appPages.startPage?.show();
  }
}
