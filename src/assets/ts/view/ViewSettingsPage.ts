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
    this.main.append(buttonWrapper);
  }
}
