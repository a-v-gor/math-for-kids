import './assets/scss/style.scss';
import { App } from './assets/ts/App';
import GameData from './assets/ts/model/GameData';

const gameData = new GameData();
const app = new App(gameData);
app.new();
