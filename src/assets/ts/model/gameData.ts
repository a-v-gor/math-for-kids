import ControllerSettingsPage from '../controller/ControllerSettingsPage';
import ControllerStartPage from '../controller/ControllerStartPage';
import iExample from './iExample';

interface iGameData {
  controllerStartPage: ControllerStartPage | null;
  controllerSettingsPage: ControllerSettingsPage | null;
  buttonWrapperSettingsPage: HTMLDivElement | null;
  examples: iExample[];
  operation: string;
}

const gameData: iGameData = {
  controllerStartPage: null,
  controllerSettingsPage: null,
  buttonWrapperSettingsPage: null,
  examples: [],
  operation: '',
};

export default gameData;
