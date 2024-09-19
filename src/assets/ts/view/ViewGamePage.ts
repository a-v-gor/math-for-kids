import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewHelp from './ViewHelp';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewGamePage extends ViewPage {
  answerField: HTMLDivElement;
  example: HTMLDivElement;
  helpCloseButton: HTMLButtonElement;
  infoBlock: HTMLDivElement;
  keysWrapper: HTMLDivElement;
  scoreValue: HTMLParagraphElement;
  title: HTMLElement;

  constructor(gameData: GameData) {
    super('gamePage', gameData);
    const headerWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'header__wrapper', 'game__header-wrapper'],
    });
    const navigation = new ViewNavigation(true);
    this.navHome = <HTMLLIElement>navigation.returnHomeButton();
    this.navHelp = <HTMLLIElement>navigation.returnHelpButton();
    const scoreWrapper = returnElement({
      tag: 'div',
      classes: ['score__wrapper'],
    });
    const scoreTitle = returnElement({
      tag: 'h2',
      classes: ['score__title'],
      textContent: 'Счет:',
    });
    this.scoreValue = <HTMLParagraphElement>returnElement({
      tag: 'p',
      classes: ['score__value'],
      textContent: '0',
    });
    this.title = returnElement({
      tag: 'h1',
      classes: ['title'],
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

    this.viewHelp = new ViewHelp([
      'Максимально возможное число для ввода — «100». После ввода числа следует подтвердить свой ответ (нажатием на кнопку «✓» или «Enter» на клавиатуре).',
      'При ошибке можно стереть введенное значение (нажатием на кнопку «×» или «Delete», «Backspace», «Esc» на клавиатуре).',
      'Игра считайется пройденной после решения всех примеров (результат заносится в книгу рекордов, посмотреть которую можно нажав «Рекорды» на главной страницы игры). Если прервать игру не решив все примеры (закрыть вкладку браузера или нажать на домик в меню), результат не будет сохранен, но игра не удалится. Игру можно завершить в будущем, выбрав «Продолжить игру» на главной странице.',
    ]);
    this.helpCloseButton = this.viewHelp.returnCloseButton();
    const viewHelpBlock = this.viewHelp.returnBlock();
    scoreWrapper.append(scoreTitle, this.scoreValue);
    headerWrapper.append(this.title, navigation.returnElement(), scoreWrapper);
    this.header.append(headerWrapper);
    exampleWrapper.append(this.example, this.answerField);
    gameWrapper.append(this.infoBlock, exampleWrapper, this.keysWrapper);
    this.main.append(viewHelpBlock, gameWrapper);
  }

  updateScore = () => {
    this.scoreValue.textContent = String(this.gameData.getScore());
  };
}
