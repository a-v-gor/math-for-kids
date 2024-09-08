import ControllerGamePage from './controller/ControllerGamePage';
import ControllerSettingsPage from './controller/ControllerSettingsPage';
import ControllerStartPage from './controller/ControllerStartPage';
import GameData from './model/GameData';
import iObjForLS from './model/iObjForLS';
import ViewGamePage from './view/ViewGamePage';
import ViewSettingsPage from './view/ViewSettingsPage';
import ViewStartPage from './view/ViewStartPage';

export class App {
  gameData: GameData;

  constructor(data: GameData) {
    this.gameData = data;
  }

  private addPagesViews() {
    const viewStartPage = new ViewStartPage(this.gameData);
    this.gameData.setViewStartPage(viewStartPage);
    const viewSettingsPage = new ViewSettingsPage(this.gameData);
    this.gameData.setViewSettingsPage(viewSettingsPage);
    const viewGamePage = new ViewGamePage(this.gameData);
    this.gameData.setViewGamePage(viewGamePage);
  }

  private addControllers() {
    const controllerStartPage = new ControllerStartPage(this.gameData);
    const controllerSettingsPage = new ControllerSettingsPage(this.gameData);
    const controllerGamePage = new ControllerGamePage(this.gameData);
    this.gameData.setControllerStartPage(controllerStartPage);
    this.gameData.setControllerSettingsPage(controllerSettingsPage);
    this.gameData.setControllerGamePage(controllerGamePage);
  }

  private actualizeData = () => {
    const stringData: string | null =
      this.gameData.storageGameData.loadFromLS();

    let parsedObject: iObjForLS = {
      examples: [],
      mistakes: [],
      operation: '',
    };
    if (stringData !== null) {
      parsedObject = <iObjForLS>JSON.parse(stringData);
      this.gameData.setExamples(parsedObject.examples);
      this.gameData.setMistakes(parsedObject.mistakes);
      this.gameData.setOperation(parsedObject.operation);
    }
  };

  new() {
    this.actualizeData();
    this.addPagesViews();
    this.addControllers();
    this.gameData.getControllerStartPage()?.startListenButtons();
    this.gameData.getControllerSettingsPage()?.startListenButtons();
    this.gameData.getControllerGamePage()?.startListenEvents();
    this.gameData.getViewStartPage()?.show();
  }
}
