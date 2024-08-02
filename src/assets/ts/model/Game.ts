import { Page } from '../view/Page';
import SettingsPage from '../view/SettingsPage';

export default class Game extends Page {
  settings: SettingsPage;

  constructor() {
    super();
    this.settings = new SettingsPage();
  }

  load() {
    this.clear();
    console.log('load game');
  }

  new() {
    this.clear();
    this.settings.show();
  }
}
