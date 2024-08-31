import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewGamePage extends ViewPage {
  navHome?: HTMLLIElement | undefined;

  constructor(gameData: GameData) {
    super('gamePage', gameData);

    this.header = returnElement({
      tag: 'div',
      classes: ['header'],
    });
    const navigation = new ViewNavigation();
    this.navHome = <HTMLLIElement>navigation.returnHomeButton();
    this.title = returnElement({
      tag: 'h1',
      classes: ['title'],
    });
    this.main = returnElement({
      tag: 'div',
      classes: ['main', 'game__main'],
    });
    this.infoBlock = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['game__info'],
      textContent: 'Введи число и нажми «✓»',
    });
    const exampleWrapper = returnElement({
      tag: 'div',
      classes: ['example__wrapper'],
    });
    this.example = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__text'],
      textContent: '00 + 00 =',
    });
    this.answerField = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['example__input'],
      textContent: '??',
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
    this.main.append(this.infoBlock, exampleWrapper, this.keysWrapper);
  }
}
