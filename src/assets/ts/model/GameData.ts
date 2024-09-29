import ControllerGamePage from '../controller/ControllerGamePage';
import ControllerRecordsPage from '../controller/ControllerRecordsPage';
import ControllerSettingsPage from '../controller/ControllerSettingsPage';
import ControllerStartPage from '../controller/ControllerStartPage';
import ViewGamePage from '../view/ViewGamePage';
import ViewRecordsPage from '../view/ViewRecordsPage';
import ViewSettingsPage from '../view/ViewSettingsPage';
import ViewStartPage from '../view/ViewStartPage';
import iExample from './iExample';
import iRecord from './iRecord';
import StorageGameData from './StorageGameData';

export default class GameData {
  private controllerGamePage: ControllerGamePage | null;
  private controllerRecordsPage: ControllerRecordsPage | null;
  private controllerSettingsPage: ControllerSettingsPage | null;
  private controllerStartPage: ControllerStartPage | null;
  private examples: iExample[];
  private gameTime: number;
  private mistakes: iExample[];
  private numExamples: number;
  private numMistakes: number;
  private operation: string;
  private records: iRecord[];
  private score: number;
  public storageGameData: StorageGameData;
  private viewGamePage: ViewGamePage | null;
  private viewRecordsPage: ViewRecordsPage | null;
  private viewSettingsPage: ViewSettingsPage | null;
  private viewStartPage: ViewStartPage | null;

  constructor() {
    this.controllerGamePage = null;
    this.controllerRecordsPage = null;
    this.controllerSettingsPage = null;
    this.controllerStartPage = null;
    this.examples = [];
    this.gameTime = 0;
    this.mistakes = [];
    this.numExamples = 0;
    this.numMistakes = 0;
    this.operation = '';
    this.records = [];
    this.score = 0;
    this.storageGameData = new StorageGameData();
    this.viewGamePage = null;
    this.viewRecordsPage = null;
    this.viewSettingsPage = null;
    this.viewStartPage = null;
  }

  setViewRecordsPage = (viewRecordsPage: ViewRecordsPage) => {
    this.viewRecordsPage = viewRecordsPage;
  };

  getViewRecordsPage = () => {
    return this.viewRecordsPage;
  };

  setControllerRecordsPage = (controllerRecordsPage: ControllerRecordsPage) => {
    this.controllerRecordsPage = controllerRecordsPage;
  };

  getControllerRecordsPage = () => {
    return this.controllerRecordsPage;
  };

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

  setGameTime = (num: number) => {
    this.gameTime = num;
  };

  getGameTime = () => {
    return this.gameTime;
  };

  setNumMistakes = (num: number) => {
    this.numMistakes = num;
  };

  getNumMistakes = () => {
    return this.numMistakes;
  };

  addRecord = (record: iRecord) => {
    if (this.records?.length > 0) {
      this.records = [record, ...this.records];
      if (this.records.length > 10) {
        this.records.length = 10;
      }
    } else {
      this.setRecords([record]);
    }
  };

  getRecords = () => {
    return this.records;
  };

  setRecords = (arrRecords: iRecord[]) => {
    this.records = arrRecords;
  };

  getNumExamples = () => {
    return this.numExamples;
  };

  setNumExamples = (num: number) => {
    this.numExamples = num;
  };
}
