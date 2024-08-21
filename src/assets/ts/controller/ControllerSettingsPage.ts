import Examples from '../model/Examples';
import gameData from '../model/gameData';

export default class ControllerSettingsPage {
  buttonWrapper: HTMLDivElement;

  constructor() {
    this.buttonWrapper = <HTMLDivElement>gameData.buttonWrapperSettingsPage;
    gameData.controllerSettingsPage = this;
  }

  addExamplesData(event: Event) {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    const operationText = button.innerHTML.slice(0, 1);
    const examples = new Examples(operationText).return();
    gameData.examples.push(...examples);
    gameData.operation = button.innerHTML;
    if (gameData.viewGamePage?.updateTitle !== undefined) {
      gameData.viewGamePage?.updateTitle(button.innerHTML);
    }
  }

  startGame = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (button.className === 'button') {
      this.addExamplesData(event);
      this.stopListenButtons();
      gameData.viewSettingsPage?.hide();
      gameData.viewGamePage?.show();
      gameData.controllerGamePage?.start();
    }
  };

  stopListenButtons = () => {
    this.buttonWrapper.removeEventListener('click', this.startGame);
  };

  startListenButtons = () => {
    this.buttonWrapper.addEventListener('click', this.startGame);
  };
}
