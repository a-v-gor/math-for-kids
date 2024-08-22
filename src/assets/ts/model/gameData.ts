import ControllerGamePage from '../controller/ControllerGamePage';
import ControllerSettingsPage from '../controller/ControllerSettingsPage';
import ControllerStartPage from '../controller/ControllerStartPage';
import ViewGamePage from '../view/ViewGamePage';
import ViewSettingsPage from '../view/ViewSettingsPage';
import ViewStartPage from '../view/ViewStartPage';
import iExample from './iExample';

interface iGameData {
  buttonWrapperSettingsPage: HTMLDivElement | null;
  controllerGamePage: ControllerGamePage | null;
  controllerSettingsPage: ControllerSettingsPage | null;
  controllerStartPage: ControllerStartPage | null;
  examples: iExample[];
  mistakes: iExample[];
  operation: string;
  viewGamePage: ViewGamePage | null;
  viewSettingsPage: ViewSettingsPage | null;
  viewStartPage: ViewStartPage | null;
}

const gameData: iGameData = {
  buttonWrapperSettingsPage: null,
  controllerGamePage: null,
  controllerSettingsPage: null,
  controllerStartPage: null,
  examples: [],
  mistakes: [],
  operation: '',
  viewGamePage: null,
  viewSettingsPage: null,
  viewStartPage: null,
};

export default gameData;
