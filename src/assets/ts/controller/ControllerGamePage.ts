import GameData from '../model/GameData';
import iExample from '../model/iExample';
import iRecord from '../model/iRecord';
import InfoBlock from '../view/InfoBlock';
import ViewGamePage from '../view/ViewGamePage';
import audioOk from '../../audio/ok.mp3';
import audioErr from '../../audio/error.mp3';

export default class ControllerGamePage {
  soundOk: HTMLAudioElement;
  soundError: HTMLAudioElement;
  gameData: GameData;
  viewGamePage: ViewGamePage;
  answerField: HTMLDivElement;
  infoBlock: InfoBlock;
  currentExample: iExample | null;
  navHome: HTMLLIElement;
  navHelp: HTMLLIElement;
  helpCloseButton: HTMLButtonElement;
  keysWrapper: HTMLDivElement;
  arrExamples: iExample[];
  startExampleTime: Date | null;
  blockButtons: boolean;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.viewGamePage = <ViewGamePage>gameData.getViewGamePage();
    this.answerField = this.viewGamePage.answerField;
    this.infoBlock = new InfoBlock(gameData);
    this.currentExample = null;
    this.navHome = <HTMLLIElement>this.viewGamePage.navHome;
    this.navHelp = <HTMLLIElement>this.viewGamePage.navHelp;
    this.keysWrapper = this.viewGamePage.keysWrapper;
    this.arrExamples = [];
    this.helpCloseButton = this.viewGamePage.helpCloseButton;
    this.startExampleTime = null;
    this.blockButtons = false;
    this.soundOk = new Audio(audioOk);
    this.soundError = new Audio(audioErr);
  }

  startNextExample = () => {
    this.arrExamples = this.gameData.getExamples();
    const example: HTMLDivElement = this.viewGamePage.example;
    if (this.arrExamples.length > 0) {
      if (this.gameData.getScore() === 0) {
        this.infoBlock.showInstruction();
      } else {
        this.infoBlock.showStatistics();
      }
      this.viewGamePage.updateScore();
      this.startExampleTime = new Date();
      const nextExample = <iExample>this.arrExamples.pop();
      this.currentExample = nextExample;
      example.innerText = `${nextExample.example} =`;
      this.answerField.innerText = '??';
    } else {
      const record: iRecord = {
        operation: this.gameData.getOperation(),
        numExamples: this.gameData.getNumExamples(),
        numMistakes: this.gameData.getNumMistakes(),
        score: this.gameData.getScore(),
        time: this.gameData.getGameTime(),
        date: new Date(),
      };
      this.gameData.addRecord(record);
      this.infoBlock.showEndGame();
      example.innerText = `Молодец`;
      this.answerField.innerText = '!!!';
      this.currentExample = null;
      this.gameData.setExamples([]);
      setTimeout(() => {
        this.viewGamePage.hide();
        this.gameData.getViewRecordsPage()?.show();
      }, 3500);
    }
  };

  private addExampleToMistakes = (example: iExample) => {
    const arrMistakes =
      this.gameData.getMistakes() === undefined
        ? []
        : this.gameData.getMistakes();
    const examplesTexts: string[] = [];
    arrMistakes.forEach((item) => {
      examplesTexts.push(item.example);
    });
    if (!examplesTexts.includes(example.example)) {
      arrMistakes.push(example);
      this.gameData.setMistakes(arrMistakes);
    }
  };

  private increaseScore = (num: number) => {
    const currentScore = this.gameData.getScore();
    const newScore = currentScore + num;
    this.gameData.setScore(newScore);
  };

  private checkAnswer = () => {
    if (this.currentExample !== null && this.answerField.textContent !== '??') {
      if (Number(this.answerField.innerText) === this.currentExample.answer) {
        if (this.startExampleTime !== null) {
          const solveTime =
            new Date().valueOf() - this.startExampleTime.valueOf();
          const gameTime = this.gameData.getGameTime();
          this.gameData.setGameTime(gameTime + solveTime);
        }
        this.gameData.setExamples(this.arrExamples);
        this.infoBlock.showRightAnswer();
        void this.soundOk.play();
        this.increaseScore(this.currentExample.score);
        this.viewGamePage.updateScore();
        this.blockButtons = true;
        setTimeout(() => {
          this.startNextExample();
          this.blockButtons = false;
        }, 1100);
      } else {
        if (this.currentExample.score > 0) {
          this.currentExample.score -= 1;
        }
        this.addExampleToMistakes(this.currentExample);
        this.infoBlock.showWrongAnswer();
        void this.soundError.play();
        this.blockButtons = true;
        setTimeout(() => {
          this.blockButtons = false;
          this.infoBlock.showInstruction();
          this.answerField.innerText = '??';
        }, 1100);
      }
    }
  };

  private controlPressedKey = (keyValue: string) => {
    if (this.blockButtons === false) {
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
  };

  private checkPressedButton = (event: Event) => {
    const button = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
      button.blur();
      this.controlPressedKey(button.name);
    }
  };

  private startListenNumButtons = () => {
    this.keysWrapper.addEventListener('click', (event: Event) =>
      this.checkPressedButton(event)
    );
  };

  private checkKeyboardButtons = (event: KeyboardEvent) => {
    const key = event.key;
    if (!key.match(/\D/g)) {
      this.controlPressedKey(key);
    } else if (key === 'Backspace' || key === 'Delete' || key === 'Escape') {
      this.controlPressedKey('×');
    } else if (key === 'Enter') {
      this.controlPressedKey('✓');
    }
  };

  private startListenKeyboardButtons = () => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.checkKeyboardButtons(event);
    });
  };

  private startListenMenu = () => {
    this.navHome.addEventListener('click', () => {
      this.gameData.storageGameData.saveToLS(
        this.gameData,
        <iExample>this.currentExample
      );
      this.viewGamePage.hide();
      this.gameData.getViewStartPage()?.show();
    });
    this.navHelp.addEventListener('click', () => {
      this.viewGamePage.viewHelp?.show();
    });
    this.helpCloseButton.addEventListener('click', () =>
      this.viewGamePage.viewHelp?.hide()
    );
  };

  private startListenCloseWindow = () => {
    window.addEventListener('beforeunload', () => {
      this.gameData.storageGameData.saveToLS(
        this.gameData,
        <iExample>this.currentExample
      );
    });
  };

  startListenEvents() {
    this.startListenNumButtons();
    this.startListenKeyboardButtons();
    this.startListenMenu();
    this.startListenCloseWindow();
  }
}
