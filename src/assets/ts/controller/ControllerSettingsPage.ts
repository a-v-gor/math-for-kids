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

  addExamplesData(event: Event) {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    const operationText = button.innerHTML.slice(0, 1);
    const examples = new Examples(operationText).return();
    this.gameData.setExamples(examples);
    this.gameData.setOperation(button.innerHTML);
  }

  startGame = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (button.className === 'button') {
      this.addExamplesData(event);
      this.gameData.getViewSettingsPage()?.hide();
      this.gameData.getControllerGamePage()?.startNextExample();
      this.gameData.getViewGamePage()?.show();
    }
  };

  startListenButtons = () => {
    this.buttonWrapper.addEventListener('click', this.startGame);
    this.navHome.addEventListener('click', () => {
      this.gameData.getViewSettingsPage()?.hide();
      this.gameData.getViewStartPage()?.show();
    });
  };
}
