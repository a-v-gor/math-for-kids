import gameData from '../model/gameData';
import iExample from '../model/iExample';
import ViewGamePage from '../view/ViewGamePage';

export default class ControllerGamePage {
  viewGamePage: ViewGamePage;
  answerField: HTMLDivElement;
  infoBlock: HTMLDivElement;
  currentExample: iExample;

  constructor() {
    this.viewGamePage = <ViewGamePage>gameData.viewGamePage;
    this.answerField = <HTMLDivElement>this.viewGamePage.answerField;
    this.infoBlock = <HTMLDivElement>this.viewGamePage.infoBlock;
    this.currentExample = <iExample>gameData.currentExample;
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
  }

  private checkAnswer() {
    if (Number(this.answerField.innerText) === this.currentExample.answer) {
      this.infoBlock.innerText = 'Верно!';
      setTimeout(() => {
        this.infoBlock.innerText = 'Введи число и нажми «✓»';
        this.startNextExample();
      }, 1100);
    } else {
      this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
      this.answerField.innerText = '??';
    }
  }

  private checkPressedButton = (event: Event) => {
    const button = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
      switch (button.name) {
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
            this.answerField.innerText = button.name;
          } else {
            this.answerField.innerText += button.name;
          }
      }
    }
  };

  private startListenNumButtons() {
    const keysWrapper: HTMLDivElement = <HTMLDivElement>(
      this.viewGamePage.keysWrapper
    );
    keysWrapper.addEventListener('click', (event: Event) =>
      this.checkPressedButton(event)
    );
  }

  start() {
    this.startNextExample();
    this.startListenNumButtons();
  }
}
