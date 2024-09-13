import ControllerGamePage from '../controller/ControllerGamePage';
import ControllerSettingsPage from '../controller/ControllerSettingsPage';
import ControllerStartPage from '../controller/ControllerStartPage';
import ViewGamePage from '../view/ViewGamePage';
import ViewSettingsPage from '../view/ViewSettingsPage';
import ViewStartPage from '../view/ViewStartPage';
import iExample from './iExample';
import StorageGameData from './StorageGameData';

export default class GameData {
  private controllerGamePage: ControllerGamePage | null;
  private controllerSettingsPage: ControllerSettingsPage | null;
  private controllerStartPage: ControllerStartPage | null;
  private examples: iExample[];
  private mistakes: iExample[];
  private operation: string;
  private viewGamePage: ViewGamePage | null;
  private viewSettingsPage: ViewSettingsPage | null;
  private viewStartPage: ViewStartPage | null;
  public storageGameData: StorageGameData;
  private score: number;

  constructor() {
    (this.controllerGamePage = null),
      (this.controllerSettingsPage = null),
      (this.controllerStartPage = null),
      (this.examples = []),
      (this.mistakes = []),
      (this.operation = ''),
      (this.viewGamePage = null),
      (this.viewSettingsPage = null),
      (this.viewStartPage = null);
    this.storageGameData = new StorageGameData();
    this.score = 0;
  }

  setViewStartPage = (viewStartPage: ViewStartPage) => {
    this.viewStartPage = viewStartPage;
  };

  getViewStartPage = () => {
    return this.viewStartPage;
  };

  setViewSettingsPage = (viewSettingsPage: ViewSettingsPage) => {
    this.viewSettingsPage = viewSettingsPage;
  };

  getViewSettingsPage = () => {
    return this.viewSettingsPage;
  };

  setViewGamePage = (viewGamePage: ViewGamePage) => {
    this.viewGamePage = viewGamePage;
  };

  getViewGamePage = () => {
    return this.viewGamePage;
  };

  setControllerStartPage = (controllerStartPage: ControllerStartPage) => {
    this.controllerStartPage = controllerStartPage;
  };

  getControllerStartPage = () => {
    return this.controllerStartPage;
  };

  setControllerSettingsPage = (
    controllerSettingsPage: ControllerSettingsPage
  ) => {
    this.controllerSettingsPage = controllerSettingsPage;
  };

  getControllerSettingsPage = () => {
    return this.controllerSettingsPage;
  };

  setControllerGamePage = (controllerGamePage: ControllerGamePage) => {
    this.controllerGamePage = controllerGamePage;
  };

  getControllerGamePage = () => {
    return this.controllerGamePage;
  };

  setExamples = (examples: iExample[]) => {
    this.examples = examples;
  };

  setNumExamples = (num: number) => {
    this.examples.length = num;
  };

  getExamples = () => {
    return this.examples;
  };

  setMistakes = (mistakes: iExample[]) => {
    this.mistakes = mistakes;
  };

  getMistakes = () => {
    return this.mistakes;
  };

  setOperation = (operation: string) => {
    this.operation = operation;
  };

  getOperation = () => {
    return this.operation;
  };

  setScore = (num: number) => {
    this.score = num;
  };

  getScore = () => {
    return this.score;
  };
}
