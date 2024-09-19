import GameData from '../model/GameData';
import ViewStartPage from '../view/ViewStartPage';

export default class ControllerStartPage {
  gameData: GameData;
  viewStartPage: ViewStartPage;
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;
  buttonRecords: HTMLButtonElement;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.viewStartPage = <ViewStartPage>gameData.getViewStartPage();
    this.buttonNewGame = this.viewStartPage.buttonNewGame;
    this.buttonLoadGame = <HTMLButtonElement>this.viewStartPage.buttonLoadGame;
    this.buttonRecords = <HTMLButtonElement>this.viewStartPage.buttonRecords;
  }
  showRecords = () => {
    this.viewStartPage.hide();
    this.gameData.getViewRecordsPage()?.show();
  };
  startNewGame = () => {
    this.viewStartPage.hide();
    this.gameData.getViewSettingsPage()?.show();
  };
  startLoadGame = () => {
    this.viewStartPage.hide();
    this.gameData.getControllerGamePage()?.startNextExample();
    this.gameData.getViewGamePage()?.show();
  };
  startListenButtons = () => {
    this.buttonNewGame.addEventListener('click', this.startNewGame);
    this.buttonLoadGame.addEventListener('click', this.startLoadGame);
    this.buttonRecords.addEventListener('click', this.showRecords);
  };
}
