import GameData from '../model/GameData';

export default class ControllerStartPage {
  gameData: GameData;
  buttonNewGame: HTMLButtonElement;
  buttonLoadGame: HTMLButtonElement;

  constructor(gameData: GameData) {
    this.gameData = gameData;
    this.buttonNewGame = <HTMLButtonElement>(
      gameData.getViewStartPage()?.buttonNewGame
    );
    this.buttonLoadGame = <HTMLButtonElement>(
      gameData.getViewStartPage()?.buttonLoadGame
    );
    gameData.setControllerStartPage(this);
  }
  startNewGame() {
    this.gameData.getViewStartPage()?.hide();
    this.gameData.getViewSettingsPage()?.show();
  }
  startLoadGame() {
    console.log('load game');
  }
  startListenButtons() {
    this.buttonNewGame.addEventListener('click', () => {
      this.startNewGame();
    });
    this.buttonLoadGame.addEventListener('click', () => {
      this.startLoadGame();
    });
  }
}
