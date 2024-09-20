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
      textContent: 'Рекорды',
    });
    this.recordsWrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['wrapper', 'records__wrapper'],
    });

    this.arrRecords = gameData.getRecords();

    this.main.classList.add('records__main');
    headerWrapper.append(title, navigation.returnElement());
    this.header.append(headerWrapper);
    this.main.append(this.recordsWrapper);
  }

  updateRecords = () => {
    const records = this.gameData.getRecords();
    const table = returnElement({
      tag: 'div',
      classes: ['table', 'records'],
    });

    const returnTextElement = (text: string) =>
      returnElement({
        tag: 'div',
        classes: ['records__text'],
        textContent: text,
      });

    records.forEach((element) => {
      const recordElement = returnElement({
        tag: 'div',
        classes: ['records__record'],
      });
      const returnEsteemText = () => {
        const solveExampleTime = Math.ceil(
          element.time / element.numExamples / 1000
        );
        if (
          solveExampleTime <= 4 &&
          (element.numMistakes === 0 ||
            element.numMistakes / element.numExamples <= 0.1)
        ) {
          return 'Отлично!';
        } else if (
          solveExampleTime <= 5.5 &&
          (element.numMistakes === 0 ||
            element.numMistakes / element.numExamples <= 0.5)
        ) {
          return 'Хорошо.';
        } else {
          return 'Неплохо.';
        }
      };
      const timeStyle = new Intl.DateTimeFormat('ru', {
        timeStyle: 'short',
        dateStyle: 'long',
      });
      const date = returnTextElement(timeStyle.format(new Date(element.date)));
      date.classList.add('records__date');
      const operation = returnTextElement(element.operation);
      operation.classList.add('records__operation');
      const numExamples = returnTextElement(
        `Примеров: ${String(element.numExamples)}`
      );
      numExamples.classList.add('records__num-examples');
      const numMistakes = returnTextElement(
        `Ошибок: ${String(element.numMistakes)}`
      );
      numMistakes.classList.add('records__num-mistakes');
      const time = returnTextElement(
        `Время: ${String(Math.ceil(element.time / 1000))} сек.`
      );
      time.classList.add('records__time');
      const score = returnTextElement(`Счёт: ${String(element.score)}`);
      score.classList.add('records__score');
      const esteem = returnTextElement(`Оценка: ${returnEsteemText()}`);
      if (esteem.textContent === 'Оценка: Отлично!') {
        esteem.classList.add('records__perfect');
      } else if (esteem.textContent === 'Оценка: Хорошо.') {
        esteem.classList.add('records__good');
      } else {
        esteem.classList.add('records__not-bad');
      }
      recordElement.append(
        date,
        operation,
        numExamples,
        numMistakes,
        time,
        score,
        esteem
      );
      table.append(recordElement);
    });
    this.recordsWrapper.innerHTML = '';
    this.recordsWrapper.append(table);
  };
}
