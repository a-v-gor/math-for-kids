import ControllerGamePage from './controller/ControllerGamePage';
import ControllerSettingsPage from './controller/ControllerSettingsPage';
import ControllerStartPage from './controller/ControllerStartPage';
import gameData from './model/gameData';
import iExample from './model/iExample';
import ViewGamePage from './view/ViewGamePage';
import ViewSettingsPage from './view/ViewSettingsPage';
import ViewStartPage from './view/ViewStartPage';

interface iObjFromLS {
  examples: iExample[];
  mistakes: iExample[];
  operation: string;
}

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

  private actualizeData = () => {
    const stringData: string | null = localStorage.getItem('gameData');
    if (stringData !== null) {
      const parsedObject: iObjFromLS = {
        examples: [],
        mistakes: [],
        operation: '',
      };
      gameData.examples = parsedObject.examples;
      gameData.mistakes = parsedObject.mistakes;
      gameData.operation = parsedObject.operation;
    }
  };

  new() {
    this.addPagesViews();
    this.addControllers();
    gameData.controllerStartPage?.startListenButtons();
    gameData.controllerSettingsPage?.startListenButtons();
    gameData.controllerGamePage?.startListenEvents();
    this.start();
  }

  start() {
    this.actualizeData();
    gameData.viewStartPage?.show();
  }
}
