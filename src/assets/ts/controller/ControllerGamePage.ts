import gameData from '../model/gameData';
import iExample from '../model/iExample';
import InfoBlock from '../view/InfoBlock';
import ViewGamePage from '../view/ViewGamePage';

export default class ControllerGamePage {
  viewGamePage: ViewGamePage;
  answerField: HTMLDivElement;
  infoBlock: InfoBlock;
  currentExample: iExample | null;
  navHome: HTMLLIElement;
  keysWrapper: HTMLDivElement;

  constructor() {
    this.viewGamePage = <ViewGamePage>gameData.viewGamePage;
    this.answerField = <HTMLDivElement>this.viewGamePage.answerField;
    this.infoBlock = new InfoBlock();
    this.currentExample = null;
    this.navHome = <HTMLLIElement>gameData.viewGamePage?.navHome;
    this.keysWrapper = <HTMLDivElement>this.viewGamePage.keysWrapper;
  }

  private startNextExample() {
    if (gameData.examples.length > 0) {
      const nextExample: iExample = <iExample>gameData.examples.pop();
      const example: HTMLDivElement = <HTMLDivElement>this.viewGamePage.example;
      this.currentExample = nextExample;
      example.innerText = `${nextExample.example} =`;
      this.answerField.innerText = '??';
    } else {
      console.log('no examples in array');
    }
    console.log(this.currentExample);
  }

  private addExampleToMistakes(example: iExample) {
    if (!gameData.mistakes.includes(example)) {
      gameData.mistakes.push(example);
    }
  }

  private checkAnswer() {
    if (this.currentExample !== null) {
      if (Number(this.answerField.innerText) === this.currentExample.answer) {
        this.infoBlock.showRightAnswer();
        setTimeout(() => {
          this.infoBlock.showInstruction();
          this.startNextExample();
        }, 1100);
      } else {
        this.addExampleToMistakes(this.currentExample);
        this.infoBlock.showWrongAnswer();
        setTimeout(() => {
          this.infoBlock.showInstruction();
          this.answerField.innerText = '??';
        }, 1100);
      }
    }
  }

  private controlPressedKey(keyValue: string) {
    switch (keyValue) {
      case '×':
        this.answerField.innerText = '??';
        break;
      case '✓':
        this.checkAnswer();
        break;
      default:
        if (
          (this.answerField.innerText.length > 1 &&
            this.answerField.innerText !== '10') ||
          this.answerField.innerText === '??'
        ) {
          this.answerField.innerText = keyValue;
        } else {
          this.answerField.innerText += keyValue;
        }
    }
  }

  private checkPressedButton = (event: Event) => {
    const button = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
      this.controlPressedKey(button.name);
    }
  };

  private startListenNumButtons = () => {
    this.keysWrapper.addEventListener('click', (event: Event) =>
      this.checkPressedButton(event)
    );
  };

  private checkKeyboardButtons(event: KeyboardEvent) {
    const key = event.key;
    if (key.match(/\d/)) {
      this.controlPressedKey(key);
    } else if (key === 'Backspace' || key === 'Delete' || key === 'Escape') {
      this.controlPressedKey('×');
    } else if (key === 'Enter') {
      this.controlPressedKey('✓');
    }
  }

  private startListenKeyboardButtons() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.checkKeyboardButtons(event);
    });
  }

  private stop() {
    gameData.viewGamePage?.hide();
    gameData.viewStartPage?.show();
  }

  private startListenMenu() {
    this.navHome.addEventListener('click', () => {
      this.saveGameData();
      this.stop();
    });
  }

  private saveGameData = () => {
    const objToSave = JSON.stringify({
      examples: [...gameData.examples, this.currentExample],
      mistakes: gameData.mistakes,
      operation: gameData.operation,
    });
    localStorage.setItem('gameData', objToSave);
  };

  private startListenCloseWindow() {
    window.addEventListener('beforeunload', this.saveGameData);
  }

  startListenEvents() {
    this.startListenNumButtons();
    this.startListenKeyboardButtons();
    this.startListenMenu();
    this.startListenCloseWindow();
  }

  start() {
    this.startNextExample();
  }
}
