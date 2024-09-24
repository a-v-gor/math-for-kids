import Examples from '../model/Examples';
import GameData from '../model/GameData';
import iExample from '../model/iExample';
import ViewSettingsPage from '../view/ViewSettingsPage';

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
  viewSettingsPage: ViewSettingsPage;
  tempOperation: string;
  tempExamples: iExample[];

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.viewSettingsPage = <ViewSettingsPage>gameData.getViewSettingsPage();
    this.buttonWrapper = this.viewSettingsPage.buttonWrapper;
    this.navHome = <HTMLLIElement>this.viewSettingsPage.navHome;
    this.navHelp = <HTMLLIElement>this.viewSettingsPage.navHelp;
    this.descriptionNumExamples = this.viewSettingsPage.descriptionNumExamples;
    this.setNumExpressionsButtons = <HTMLDivElement>(
      this.viewSettingsPage.setNumExpressionsButtons
    );
    this.removeMostExamplesButton =
      this.viewSettingsPage.removeMostExamplesButton;
    this.removeManyExamplesButton =
      this.viewSettingsPage.removeManyExamplesButton;
    this.removeOneExampleButton = this.viewSettingsPage.removeOneExampleButton;
    this.addMostExamplesButton = this.viewSettingsPage.addMostExamplesButton;
    this.addManyExamplesButton = this.viewSettingsPage.addManyExamplesButton;
    this.addOneExampleButton = this.viewSettingsPage.addOneExampleButton;
    this.settingsApplyButton = this.viewSettingsPage.settingsApplyButton;
    this.settingsCloseButton = this.viewSettingsPage.infoCloseButton;
    this.helpCloseButton = this.viewSettingsPage.helpCloseButton;
    this.settingsBlock = this.viewSettingsPage.settingsBlock;
    this.tempOperation = '';
    this.tempExamples = [];
  }

  addExamplesData = () => {
    const operationText = this.tempOperation.slice(0, 1);
    let examples = [];
    if (operationText === '!') {
      examples = this.gameData.getMistakes();
      this.gameData.setMistakes([]);
    } else {
      examples = new Examples(operationText).return();
    }
    this.tempExamples = examples;
  };

  makeSettingsBlockActive = () => {
    this.settingsBlock.classList.remove('information_unactive');
  };

  makeSettingsBlockUnactive = () => {
    if (!this.settingsBlock.classList.contains('information_unactive')) {
      this.settingsBlock.classList.add('information_unactive');
    }
  };

  private applyTempSettings = () => {
    this.gameData.setOperation(this.tempOperation);
    this.gameData.setExamples(this.tempExamples);
  };

  setExamples = (event: Event) => {
    const button: HTMLButtonElement = <HTMLButtonElement>event.target;
    this.tempOperation = button.innerHTML;
    const descriptionOperation = <HTMLElement>(
      this.viewSettingsPage.descriptionOperation
    );
    descriptionOperation.textContent = button.innerHTML;
    this.makeSettingsBlockActive();
    this.addExamplesData();
    const numExamples = this.tempExamples.length;
    const lastNumExamples = this.gameData.getRecords()[0] !== undefined ? this.gameData.getRecords()[0].numExamples : 10;
    this.descriptionNumExamples.textContent =
      numExamples >= lastNumExamples ? String(lastNumExamples) : String(numExamples);
  };

  checkActiveSetNumButtons = () => {
    const numExamples = this.tempExamples.length;
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
    this.tempExamples.length = Number(this.descriptionNumExamples.textContent);
    this.gameData.setGameTime(0);
    this.gameData.setNumMistakes(0);
    this.gameData.setScore(0);
    this.gameData.setNumExamples(
      Number(this.descriptionNumExamples.textContent)
    );
    this.applyTempSettings();
    this.makeSettingsBlockUnactive();
    this.viewSettingsPage.hide();
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
      this.viewSettingsPage.viewHelp?.hide()
    );
    this.navHome.addEventListener('click', () => {
      this.viewSettingsPage.hide();
      this.gameData.getViewStartPage()?.show();
    });
    this.navHelp.addEventListener('click', () => {
      this.viewSettingsPage.viewHelp?.show();
    });
  };
}
