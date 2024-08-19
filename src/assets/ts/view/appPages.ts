import ViewPage from './ViewPage';

interface iAppPages {
  startPage: ViewPage | null;
  settingsPage: ViewPage | null;
}

const appPages: iAppPages = {
  startPage: null,
  settingsPage: null,
};

export default appPages;
