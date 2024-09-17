import GameData from '../model/GameData';
import iRecord from '../model/iRecord';
import returnElement from './returnElement';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewRecordsPage extends ViewPage {
  arrRecords: iRecord[];

  constructor(gameData: GameData) {
    super('recordsPage', gameData);
    const headerWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'header__wrapper'],
    });
    const navigation = new ViewNavigation(false);
    this.navHome = <HTMLLIElement>navigation.returnHomeButton();
    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: 'Таблица рекордов',
    });
    const recordsWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'records__wrapper'],
    });

    this.arrRecords = gameData.getRecords();

    headerWrapper.append(title, navigation.returnElement());
    this.header.append(headerWrapper);
    this.main.append(recordsWrapper);
  }
}
