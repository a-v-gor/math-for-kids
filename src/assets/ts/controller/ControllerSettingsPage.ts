import Examples from '../model/Examples';
import gameData from '../model/gameData';
import appPages from '../view/appPages';

export default class ControllerSettingsPage {
  buttonWrapper: HTMLDivElement;

  constructor() {
    this.buttonWrapper = <HTMLDivElement>gameData.buttonWrapperSettingsPage;
    gameData.controllerSettingsPage = this;
  }

  addData(event: Event) {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    const operationText = button.innerHTML.slice(0, 1);
    const examples = new Examples(operationText).return();
    gameData.examples.push(...examples);
    gameData.operation = button.innerHTML;
  }

  stopListenButtons = () => {
    this.buttonWrapper.removeEventListener('click', (event: Event) => {
      const button: HTMLButtonElement = <HTMLButtonElement>event.target;
      if (button.className === 'button') {
        this.addData(event);
        this.stopListenButtons();
        appPages.settingsPage?.hide();
      }
    });
  };

  startListenButtons = () => {
    this.buttonWrapper.addEventListener('click', (event: Event) => {
      const button: HTMLButtonElement = <HTMLButtonElement>event.target;
      if (button.className === 'button') {
        this.addData(event);
        this.stopListenButtons();
        appPages.settingsPage?.hide();
      }
    });
  };
}
