import ControllerGamePage from './controller/ControllerGamePage';
import ControllerRecordsPage from './controller/ControllerRecordsPage';
import ControllerSettingsPage from './controller/ControllerSettingsPage';
import ControllerStartPage from './controller/ControllerStartPage';
import GameData from './model/GameData';
import iObjForLS from './model/iObjForLS';
import ViewGamePage from './view/ViewGamePage';
import ViewRecordsPage from './view/ViewRecordsPage';
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
    const viewRecordsPage = new ViewRecordsPage(this.gameData);
    this.gameData.setViewRecordsPage(viewRecordsPage);
  }

  private addControllers() {
    const controllerStartPage = new ControllerStartPage(this.gameData);
    const controllerSettingsPage = new ControllerSettingsPage(this.gameData);
    const controllerGamePage = new ControllerGamePage(this.gameData);
    const controllerRecordsPage = new ControllerRecordsPage(this.gameData);
    this.gameData.setControllerStartPage(controllerStartPage);
    this.gameData.setControllerSettingsPage(controllerSettingsPage);
    this.gameData.setControllerGamePage(controllerGamePage);
    this.gameData.setControllerRecordsPage(controllerRecordsPage);
  }

  private actualizeData = () => {
    const stringData: string | null =
      this.gameData.storageGameData.loadFromLS();
    let parsedObject: iObjForLS = {
      examples: [],
      mistakes: [],
      operation: '',
      score: 0,
      gameTime: 0,
      numMistakes: 0,
      numExamples: 0,
      records: [],
    };
    if (stringData !== null) {
      parsedObject = <iObjForLS>JSON.parse(stringData);
      this.gameData.setExamples(parsedObject.examples);
      this.gameData.setMistakes(parsedObject.mistakes);
      this.gameData.setOperation(parsedObject.operation);
      this.gameData.setScore(parsedObject.score);
      this.gameData.setRecords(parsedObject.records);
    }
  };

  new() {
    this.actualizeData();
    this.addPagesViews();
    this.addControllers();
    this.gameData.getControllerStartPage()?.startListenButtons();
    this.gameData.getControllerSettingsPage()?.startListenButtons();
    this.gameData.getControllerGamePage()?.startListenEvents();
    this.gameData.getControllerRecordsPage()?.startListenMenu();
    this.gameData.getViewStartPage()?.show();
  }
}
