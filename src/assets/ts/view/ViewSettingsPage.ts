import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewNavigation from './ViewNavigation';
import ViewPage from './ViewPage';

export default class ViewSettingsPage extends ViewPage {
  navHome?: HTMLLIElement | undefined;

  constructor(gameData: GameData) {
    super('settingsPage', gameData);
    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: 'Новая игра',
    });

    const buttonWrapper = returnElement({
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
      classes: ['button'],
      textContent: '! Ошибки',
    });

    this.settingsBlock = returnElement({
      tag: 'div',
      classes: ['settings', 'settings_unactive'],
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

    this.descriptionOperation = returnElement({
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

    const numExpressionsWrapper = returnElement({
      tag: 'div',
      classes: ['descript-list__buttons-wrap'],
    });

    const removeManyNumExamplesButton = returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '--',
    });

    const removeOneNumExamplesButton = returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '-',
    });

    const addManyNumExamplesButton = returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '++',
    });

    const addOneNumExamplesButton = returnElement({
      tag: 'button',
      classes: ['button', 'descript-list__button'],
      textContent: '+',
    });

    this.descriptionNumExamples = returnElement({
      tag: 'div',
      classes: ['descript-list__descr'],
    });

    const settingsApplyButton = returnElement({
      tag: 'button',
      classes: ['button', 'settings__apply-button'],
      textContent: 'Применить',
    });

    numExpressionsWrapper.append(
      removeManyNumExamplesButton,
      removeOneNumExamplesButton,
      this.descriptionNumExamples,
      addOneNumExamplesButton,
      addManyNumExamplesButton
    );
    descriptionNumExamplesWrapper.append(
      terminNumExamples,
      numExpressionsWrapper
    );
    descriptionOperationWrapper.append(
      terminOperation,
      this.descriptionOperation
    );
    settingsDescriptions.append(
      descriptionOperationWrapper,
      descriptionNumExamplesWrapper
    );
    settingsWrapper.append(settingsDescriptions, settingsApplyButton);
    this.settingsBlock.append(settingsWrapper);

    const navigation = new ViewNavigation();
    this.navHome = <HTMLLIElement>navigation.returnHomeButton();

    this.header.append(title, navigation.returnElement());
    gameData.setButtonWrapperSettingsPage(<HTMLDivElement>buttonWrapper);

    buttonWrapper.append(
      this.buttonSetSum,
      this.buttonSetSubstr,
      this.buttonSetMultiple,
      this.buttonSetFix
    );
    this.main.append(buttonWrapper, this.settingsBlock);
  }
}
