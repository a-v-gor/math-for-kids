import GameData from '../model/GameData';
import ViewRecordsPage from '../view/ViewRecordsPage';

export default class ControllerRecordsPage {
  gameData: GameData;
  viewRecordsPage: ViewRecordsPage;
  navHome: HTMLLIElement;

  constructor(data: GameData) {
    this.gameData = data;
    this.viewRecordsPage = <ViewRecordsPage>this.gameData.getViewRecordsPage();
    this.navHome = <HTMLLIElement>this.gameData.getViewRecordsPage()?.navHome;
  }

  startListenMenu = () => {
    this.navHome.addEventListener('click', () => {
      this.viewRecordsPage.hide();
      this.gameData.getViewStartPage()?.show();
    });
  };
}
