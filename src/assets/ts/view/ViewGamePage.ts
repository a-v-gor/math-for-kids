import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewGamePage extends ViewPage {
  navHome: HTMLLIElement;
  keysWrapper: HTMLDivElement;
  answerField: HTMLDivElement;
  example: HTMLDivElement;
  infoBlock: HTMLDivElement;
  title: HTMLElement;

  constructor(gameData: GameData) {
    super('gamePage', gameData);

    const navigation = new ViewNavigation();
    this.navHome = <HTMLLIElement>navigation.returnHomeButton();
    this.title = returnElement({
      tag: 'h1',
      classes: ['title'],
    });
    this.main = returnElement({
      tag: 'main',
      classes: ['main'],
    });
    const gameWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'game__wrapper'],
    });
    this.infoBlock = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['game__info'],
    });
    const exampleWrapper = returnElement({
      tag: 'div',
      classes: ['game__example-wrapper', 'example__wrapper'],
    });
    this.example = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__text'],
    });
    this.answerField = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__input'],
    });
    const keysTextsArr = [];
    for (let i = 1; i < 10; i += 1) {
      keysTextsArr.push(`${i}`);
    }
    keysTextsArr.push('×', '0', '✓');
    this.keysWrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['keys__wrapper'],
    });
    for (let i = 0; i < keysTextsArr.length; i += 1) {
      const classesArr = ['button', 'keys__button'];
      if (keysTextsArr[i] === '×') {
        classesArr.push('keys__cancel');
      }
      if (keysTextsArr[i] === '✓') {
        classesArr.push('keys__submit');
      }
      const keyButton = returnElement({
        tag: 'button',
        classes: classesArr,
        attrib: [
          {
            name: 'name',
            value: keysTextsArr[i],
          },
        ],
        textContent: keysTextsArr[i],
      });
      this.keysWrapper.append(keyButton);
    }

    this.updateTitle = (value: string) => {
      if (this.title !== undefined) {
        this.title.textContent = value;
      }
    };

    this.header.append(this.title, navigation.returnElement());
    exampleWrapper.append(this.example, this.answerField);
    gameWrapper.append(this.infoBlock, exampleWrapper, this.keysWrapper);
    this.main.append(gameWrapper);
  }
}
