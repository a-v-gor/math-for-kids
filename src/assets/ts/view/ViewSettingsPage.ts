import GameData from '../model/GameData';
import returnElement from './returnElement';
import ViewPage from './ViewPage';

export default class ViewSettingsPage extends ViewPage {
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

    this.header.append(title);
    gameData.setButtonWrapperSettingsPage(<HTMLDivElement>buttonWrapper);

    buttonWrapper.append(
      this.buttonSetSum,
      this.buttonSetSubstr,
      this.buttonSetMultiple
    );
    this.main.append(buttonWrapper);
  }
}
