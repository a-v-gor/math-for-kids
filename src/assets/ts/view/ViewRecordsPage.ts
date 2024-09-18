import GameData from '../model/GameData';
import iRecord from '../model/iRecord';
import returnElement from './returnElement';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewRecordsPage extends ViewPage {
  arrRecords: iRecord[];
  recordsWrapper: HTMLDivElement;

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
    this.recordsWrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['wrapper', 'records__wrapper'],
    });

    this.arrRecords = gameData.getRecords();

    headerWrapper.append(title, navigation.returnElement());
    this.header.append(headerWrapper);
    this.main.append(this.recordsWrapper);
  }

  updateRecords = () => {
    const records = this.gameData.getRecords();
    const table = returnElement({
      tag: 'div',
      classes: ['table', 'records__table'],
    });

    records.forEach((element) => {
      const row = returnElement({
        tag: 'div',
        classes: ['table__row'],
      });
      const timeStyle = new Intl.DateTimeFormat('ru', {
        timeStyle: 'short',
        dateStyle: 'long',
      });

      const date = returnElement({
        tag: 'div',
        textContent: `${timeStyle.format(new Date(element.date))}`,
      });
      const operation = returnElement({
        tag: 'div',
        textContent: `Действие: «${element.operation}»`,
      });
      const numExamples = returnElement({
        tag: 'div',
        textContent: `Примеров: ${String(element.numExamples)}`,
      });
      const numMistakes = returnElement({
        tag: 'div',
        textContent: `Ошибок: ${String(element.numMistakes)}`,
      });
      const time = returnElement({
        tag: 'div',
        textContent: `Время: ${String(Math.ceil(element.time / 1000))} сек.`,
      });
      const score = returnElement({
        tag: 'div',
        textContent: `Счёт: ${String(element.score)}`,
      });
      row.append(date, operation, numExamples, numMistakes, time, score);
      table.append(row);
    });
    this.recordsWrapper.innerHTML = '';
    this.recordsWrapper.append(table);
  };
}
