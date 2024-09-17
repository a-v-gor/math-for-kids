import GameData from '../model/GameData';
import ViewRecordsPage from '../view/ViewRecordsPage';

export default class ControllerRecordsPage {
  gameData: GameData;
  viewRecordsPage: ViewRecordsPage;

  constructor(data: GameData) {
    this.gameData = data;
    this.viewRecordsPage = this.gameData.getViewRecordsPage();
  }
}
