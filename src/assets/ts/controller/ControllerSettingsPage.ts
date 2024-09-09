import Examples from '../model/Examples';
import GameData from '../model/GameData';

export default class ControllerSettingsPage {
  gameData: GameData;
  buttonWrapper: HTMLDivElement;
  navHome: HTMLLIElement;
  navHelp: HTMLLIElement;
  helpCloseButton: HTMLButtonElement;
  setNumExpressionsButtons: HTMLDivElement;
  descriptionNumExamples: HTMLDivElement;
  removeMostExamplesButton: HTMLButtonElement;
  removeManyExamplesButton: HTMLButtonElement;
  removeOneExampleButton: HTMLButtonElement;
  addMostExamplesButton: HTMLButtonElement;
  addManyExamplesButton: HTMLButtonElement;
  addOneExampleButton: HTMLButtonElement;
  settingsApplyButton: HTMLButtonElement;
  settingsCloseButton: HTMLButtonElement;
  settingsBlock: HTMLDivElement;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.buttonWrapper = <HTMLDivElement>(
      gameData.getButtonWrapperSettingsPage()
    );
    this.navHome = <HTMLLIElement>gameData.getViewSettingsPage()?.navHome;
    this.navHelp = <HTMLLIElement>gameData.getViewSettingsPage()?.navHelp;
    this.descriptionNumExamples = <HTMLDivElement>(
      this.gameData.getViewSettingsPage()?.descriptionNumExamples
    );
    this.setNumExpressionsButtons = <HTMLDivElement>(
      gameData.getViewSettingsPage()?.setNumExpressionsButtons
    );
    this.removeMostExamplesButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.removeMostExamplesButton
    );
    this.removeManyExamplesButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.removeManyExamplesButton
    );
    this.removeOneExampleButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.removeOneExampleButton
    );
    this.addMostExamplesButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.addMostExamplesButton
    );
    this.addManyExamplesButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.addManyExamplesButton
    );
    this.addOneExampleButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.addOneExampleButton
    );
    this.settingsApplyButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.settingsApplyButton
    );
    this.settingsCloseButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.infoCloseButton
    );
    this.helpCloseButton = <HTMLButtonElement>(
      gameData.getViewSettingsPage()?.helpCloseButton
    );
    this.settingsBlock = <HTMLDivElement>(
      this.gameData.getViewSettingsPage()?.settingsBlock
    );
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
    this.settingsBlock.classList.remove('information_unactive');
  };

  makeSettingsBlockUnactive = () => {
    if (!this.settingsBlock.classList.contains('information_unactive')) {
      this.settingsBlock.classList.add('information_unactive');
    }
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
    this.descriptionNumExamples.textContent =
      numExamples >= 20 ? '20' : String(numExamples);
  };

  checkActiveSetNumButtons = () => {
    const numExamples = this.gameData.getExamples().length;
    if (Number(this.descriptionNumExamples.textContent) == numExamples) {
      this.addOneExampleButton.disabled = true;
    } else {
      this.addOneExampleButton.disabled = false;
    }
    if (Number(this.descriptionNumExamples.textContent) + 10 > numExamples) {
      this.addManyExamplesButton.disabled = true;
    } else {
      this.addManyExamplesButton.disabled = false;
    }
    if (Number(this.descriptionNumExamples.textContent) + 50 > numExamples) {
      this.addMostExamplesButton.disabled = true;
    } else {
      this.addMostExamplesButton.disabled = false;
    }
    if (Number(this.descriptionNumExamples.textContent) - 50 <= 0) {
      this.removeMostExamplesButton.disabled = true;
    } else {
      this.removeMostExamplesButton.disabled = false;
    }
    if (Number(this.descriptionNumExamples.textContent) - 10 <= 0) {
      this.removeManyExamplesButton.disabled = true;
    } else {
      this.removeManyExamplesButton.disabled = false;
    }
    if (Number(this.descriptionNumExamples.textContent) - 1 <= 0) {
      this.removeOneExampleButton.disabled = true;
    } else {
      this.removeOneExampleButton.disabled = false;
    }
  };

  setGame = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
      this.setExamples(event);
      this.checkActiveSetNumButtons();
    }
  };

  changeNumExamples = (event: MouseEvent) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    if (button.classList.contains('button')) {
      if (button === this.removeOneExampleButton) {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) - 1
        );
      } else if (button === this.removeManyExamplesButton) {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) - 10
        );
      } else if (button === this.removeMostExamplesButton) {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) - 50
        );
      } else if (button === this.addOneExampleButton) {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) + 1
        );
      } else if (button === this.addManyExamplesButton) {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) + 10
        );
      } else {
        this.descriptionNumExamples.textContent = String(
          Number(this.descriptionNumExamples.textContent) + 50
        );
      }
      this.checkActiveSetNumButtons();
    }
  };

  applySettings = () => {
    this.gameData.setNumExamples(
      Number(this.descriptionNumExamples.textContent)
    );
    this.makeSettingsBlockUnactive();
    this.gameData.getViewSettingsPage()?.hide();
    this.gameData.getControllerGamePage()?.startNextExample();
    this.gameData.getViewGamePage()?.show();
  };

  startListenButtons = () => {
    this.buttonWrapper.addEventListener('click', this.setGame);
    this.setNumExpressionsButtons.addEventListener(
      'click',
      this.changeNumExamples
    );
    this.settingsApplyButton.addEventListener('click', this.applySettings);
    this.settingsCloseButton.addEventListener(
      'click',
      this.makeSettingsBlockUnactive
    );
    this.helpCloseButton.addEventListener('click', () =>
      this.gameData.getViewSettingsPage()?.viewHelp.hide()
    );
    this.navHome.addEventListener('click', () => {
      this.gameData.getViewSettingsPage()?.hide();
      this.gameData.getViewStartPage()?.show();
    });
    this.navHelp.addEventListener('click', () => {
      this.gameData.getViewSettingsPage()?.viewHelp.show();
    });
  };
}
