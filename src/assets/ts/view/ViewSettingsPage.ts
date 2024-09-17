import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewHelp from './ViewHelp';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewSettingsPage extends ViewPage {
  addManyExamplesButton: HTMLButtonElement;
  addMostExamplesButton: HTMLButtonElement;
  addOneExampleButton: HTMLButtonElement;
  buttonSetMultiple: HTMLButtonElement;
  buttonSetSubstr: HTMLButtonElement;
  buttonSetSum: HTMLButtonElement;
  buttonWrapper: HTMLDivElement;
  descriptionNumExamples: HTMLDivElement;
  descriptionOperation: HTMLDivElement;
  helpCloseButton: HTMLButtonElement;
  infoCloseButton: HTMLButtonElement;
  removeManyExamplesButton: HTMLButtonElement;
  removeMostExamplesButton: HTMLButtonElement;
  removeOneExampleButton: HTMLButtonElement;
  setNumExpressionsButtons: HTMLElement | undefined;
  settingsApplyButton: HTMLButtonElement;
  settingsBlock: HTMLDivElement;

  constructor(gameData: GameData) {
    super('settingsPage', gameData);

    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: 'Новая игра',
    });

    const headerWrapper = returnElement({
      tag: 'div',
      classes: ['wrapper', 'header__wrapper'],
    });

    const navigation = new ViewNavigation(true);

    this.navHome = <HTMLLIElement>navigation.returnHomeButton();
    this.navHelp = <HTMLLIElement>navigation.returnHelpButton();

    this.buttonWrapper = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['button-wrapper'],
    });

    this.buttonSetSum = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '+ Сложение',
    });

    this.buttonSetSubstr = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '- Вычитание',
    });

    this.buttonSetMultiple = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '× Умножение',
    });

    this.buttonSetFix = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'button-mistakes'],
      textContent: '! Ошибки',
    });

    this.settingsBlock = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['settings', 'information', 'information_unactive'],
    });

    const settingsWrapper = returnElement({
      tag: 'div',
      classes: ['settings__wrapper'],
    });

    const settingsDescriptions = returnElement({
      tag: 'div',
      classes: ['settings__descript-list', 'descript-list'],
    });

    const descriptionOperationWrapper = returnElement({
      tag: 'div',
      classes: ['descript-list__descr-wrapper'],
    });

    const terminOperation = returnElement({
      tag: 'div',
      classes: ['descript-list__term'],
      textContent: 'Действие: ',
    });

    this.descriptionOperation = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['descript-list__descr'],
    });

    const descriptionNumExamplesWrapper = returnElement({
      tag: 'div',
      classes: ['descript-list__descr-wrapper'],
    });

    const terminNumExamples = returnElement({
      tag: 'div',
      classes: ['descript-list__term'],
      textContent: 'Количество примеров:',
    });

    this.setNumExpressionsButtons = returnElement({
      tag: 'div',
      classes: ['descript-list__buttons-wrap'],
    });

    this.removeMostExamplesButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '---',
    });

    this.removeManyExamplesButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '--',
    });

    this.removeOneExampleButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '-',
    });

    this.addOneExampleButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '+',
    });

    this.addManyExamplesButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '++',
    });

    this.addMostExamplesButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '+++',
    });

    this.descriptionNumExamples = <HTMLDivElement>returnElement({
      tag: 'div',
      classes: ['descript-list__descr'],
    });

    this.settingsApplyButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'settings__apply-button'],
      textContent: 'Применить',
    });
    this.infoCloseButton = <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button', 'settings__close-button'],
    });

    this.viewHelp = new ViewHelp([
      `Для выбора математической операции (сложение, вычитание, умножение) нажмите соответствующую кнопку.`,
      'Если активна кнопка «! Ошибки», по нажатию на нее можно приступить к работе над ошибками, допущенными ранее.',
      'В следующем окне выберите количество примеров для решения (по умолчанию 20). Кнопки «---», «--» и «-» уменьшают число на 50, 10 и 1 соответственно. Кнопки прибавления действуют аналогично в сторону увеличения числа.',
      'Нажатием на кнопку «Применить» начните игру.',
    ]);
    this.helpCloseButton = this.viewHelp.returnCloseButton();

    const viewHelpBlock = this.viewHelp.returnBlock();

    this.setNumExpressionsButtons.append(
      this.descriptionNumExamples,
      this.removeMostExamplesButton,
      this.removeManyExamplesButton,
      this.removeOneExampleButton,
      this.addOneExampleButton,
      this.addManyExamplesButton,
      this.addMostExamplesButton
    );
    descriptionNumExamplesWrapper.append(
      terminNumExamples,
      this.setNumExpressionsButtons
    );
    descriptionOperationWrapper.append(
      terminOperation,
      this.descriptionOperation
    );
    settingsDescriptions.append(
      descriptionOperationWrapper,
      descriptionNumExamplesWrapper
    );
    settingsWrapper.append(
      settingsDescriptions,
      this.settingsApplyButton,
      this.infoCloseButton
    );
    this.settingsBlock.append(settingsWrapper);

    headerWrapper.append(title, navigation.returnElement());
    this.header.append(headerWrapper);

    this.buttonWrapper.append(
      this.buttonSetSum,
      this.buttonSetSubstr,
      this.buttonSetMultiple,
      this.buttonSetFix
    );
    this.main.append(viewHelpBlock, this.buttonWrapper, this.settingsBlock);
  }
}
