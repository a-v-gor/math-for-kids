import GameData from '../model/GameData';
import iExample from '../model/iExample';
import InfoBlock from '../view/InfoBlock';
import ViewGamePage from '../view/ViewGamePage';

export default class ControllerGamePage {
  gameData: GameData;
  viewGamePage: ViewGamePage;
  answerField: HTMLDivElement;
  infoBlock: InfoBlock;
  currentExample: iExample | null;
  navHome: HTMLLIElement;
  keysWrapper: HTMLDivElement;
  arrExamples: iExample[] | null;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.viewGamePage = <ViewGamePage>gameData.getViewGamePage();
    this.answerField = <HTMLDivElement>this.viewGamePage.answerField;
    this.infoBlock = new InfoBlock(gameData);
    this.currentExample = null;
    this.navHome = <HTMLLIElement>gameData.getViewGamePage()?.navHome;
    this.keysWrapper = <HTMLDivElement>this.viewGamePage.keysWrapper;
    this.arrExamples = null;
  }

  startNextExample = () => {
    this.arrExamples = this.gameData.getExamples();

    if (this.arrExamples !== null && this.arrExamples.length > 0) {
      const nextExample = <iExample>this.arrExamples.pop();
      const example: HTMLDivElement = <HTMLDivElement>this.viewGamePage.example;
      this.currentExample = nextExample;
      example.innerText = `${nextExample.example} =`;
      this.answerField.innerText = '??';
    } else {
      console.log('no examples in array');
    }
  };

  private addExampleToMistakes = (example: iExample) => {
    const arrMistakes =
      this.gameData.getMistakes() === undefined
        ? []
        : this.gameData.getMistakes();
    if (!arrMistakes.includes(example)) {
      arrMistakes.push(example);
      this.gameData.setMistakes(arrMistakes);
    }
  };

  private checkAnswer = () => {
    if (this.currentExample !== null) {
      if (Number(this.answerField.innerText) === this.currentExample.answer) {
        if (this.arrExamples !== null) {
          this.gameData.setExamples(this.arrExamples);
        }
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
  };

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
    if (!key.match(/\D/g)) {
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
    this.gameData.getViewGamePage()?.hide();
    this.gameData.getViewStartPage()?.show();
  }

  private startListenMenu() {
    this.navHome.addEventListener('click', () => {
      this.gameData.storageGameData.saveToLS(this.gameData);
      this.stop();
    });
  }

  private startListenCloseWindow() {
    window.addEventListener('beforeunload', () => {
      this.gameData.storageGameData.saveToLS(this.gameData);
    });
  }

  startListenEvents() {
    this.startListenNumButtons();
    this.startListenKeyboardButtons();
    this.startListenMenu();
    this.startListenCloseWindow();
  }
}
