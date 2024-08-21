import ControllerGamePage from './controller/ControllerGamePage';
import ControllerSettingsPage from './controller/ControllerSettingsPage';
import ControllerStartPage from './controller/ControllerStartPage';
import gameData from './model/gameData';
import ViewGamePage from './view/ViewGamePage';
import ViewSettingsPage from './view/ViewSettingsPage';
import ViewStartPage from './view/ViewStartPage';

export class App {
  private addPagesViews() {
    const viewStartPage = new ViewStartPage();
    const viewSettingsPage = new ViewSettingsPage();
    const viewGamePage = new ViewGamePage();
    viewStartPage.savePageToState();
    viewSettingsPage.savePageToState();
    viewGamePage.savePageToState();
  }

  private addControllers() {
    const controllerStartPage = new ControllerStartPage();
    gameData.controllerStartPage = controllerStartPage;
    const controllerSettingsPage = new ControllerSettingsPage();
    gameData.controllerSettingsPage = controllerSettingsPage;
    const controllerGamePage = new ControllerGamePage();
    gameData.controllerGamePage = controllerGamePage;
  }

  start() {
    this.addPagesViews();
    this.addControllers();
    gameData.viewStartPage?.show();
    gameData.controllerStartPage?.startListenButtons();
  }
}
