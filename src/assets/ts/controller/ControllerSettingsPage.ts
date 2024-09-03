import Examples from '../model/Examples';
import GameData from '../model/GameData';

export default class ControllerSettingsPage {
  gameData: GameData;
  buttonWrapper: HTMLDivElement;
  navHome: HTMLLIElement;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.buttonWrapper = <HTMLDivElement>(
      gameData.getButtonWrapperSettingsPage()
    );
    this.navHome = <HTMLLIElement>gameData.getViewSettingsPage()?.navHome;
    gameData.setControllerSettingsPage(this);
  }

  addExamplesData = () => {
    const operationText = this.gameData.getOperation().slice(0, 1);
    let examples = [];
    if (operationText === '!') {
      examples = this.gameData.getMistakes();
      this.gameData.setMistakes([]);
    } else {
      examples = new Examples(operationText).return();
    }
    this.gameData.setExamples(examples);
  };

  makeSettingsBlockActive = () => {
    const settingsBlock = this.gameData.getViewSettingsPage()?.settingsBlock;
    settingsBlock?.classList.remove('settings_unactive');
  };

  makeSettingsBlockUnactive = () => {
    const settingsBlock = this.gameData.getViewSettingsPage()?.settingsBlock;
    settingsBlock?.classList.add('settings_unactive');
  };

  setExamples = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    this.gameData.setOperation(button.innerHTML);
    const descriptionOperation = <HTMLElement>(
      this.gameData.getViewSettingsPage()?.descriptionOperation
    );
    descriptionOperation.textContent = button.innerHTML;
    this.makeSettingsBlockActive();
    this.addExamplesData();
    const numExamples = this.gameData.getExamples().length;
    const descriptionNumExamples = <HTMLElement>(
      this.gameData.getViewSettingsPage()?.descriptionNumExamples
    );
    descriptionNumExamples.textContent = String(numExamples);
  };

  setGame = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (button.className === 'button') {
      this.setExamples(event);
      // this.gameData.getViewSettingsPage()?.hide();
      // this.gameData.getControllerGamePage()?.startNextExample();
      // this.gameData.getViewGamePage()?.show();
    }
  };

  startListenButtons = () => {
    this.buttonWrapper.addEventListener('click', this.setGame);
    this.navHome.addEventListener('click', () => {
      this.gameData.getViewSettingsPage()?.hide();
      this.gameData.getViewStartPage()?.show();
    });
  };
}
