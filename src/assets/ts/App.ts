import ControllerStartPage from './controller/ControllerStartPage';
import gameData from './model/gameData';
import appPages from './view/appPages';
import ViewSettingsPage from './view/ViewSettingsPage';
import ViewStartPage from './view/ViewStartPage';

export class App {
  private addPagesViews() {
    const viewStartPage = new ViewStartPage();
    const viewSettingsPage = new ViewSettingsPage();
    viewStartPage.savePageToState();
    viewSettingsPage.savePageToState();
  }

  private addControllers() {
    const controllerStartPage = new ControllerStartPage();
    gameData.controllerStartPage = controllerStartPage;
  }

  start() {
    this.addPagesViews();
    this.addControllers();
    appPages.startPage?.show();
    gameData.controllerStartPage?.startListenButtons();
  }
}
