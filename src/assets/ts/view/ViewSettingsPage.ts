// import gameData from '../model/gameData';
// import returnElement from './returnElement';
// import ViewPage from './ViewPage';

// const header = returnElement({
//   tag: 'header',
//   classes: ['header'],
// });

// const main = returnElement({
//   tag: 'main',
//   classes: ['main'],
// });

// const footer = returnElement({
//   tag: 'footer',
//   classes: ['footer'],
// });

// const pageName = 'settingsPage';

// export default class ViewSettingsPage extends ViewPage {
//   constructor() {
//     super(pageName, header, main, footer);
//     const title = returnElement({
//       tag: 'h1',
//       classes: ['title'],
//       textContent: 'Новая игра',
//     });

//     header.append(title);

//     const buttonSum = returnElement({
//       tag: 'button',
//       classes: ['button'],
//       textContent: '+ Сложение',
//     });

//     const buttonSubstr = returnElement({
//       tag: 'button',
//       classes: ['button'],
//       textContent: '- Вычитание',
//     });

//     const buttonMultiple = returnElement({
//       tag: 'button',
//       classes: ['button'],
//       textContent: '× Умножение',
//     });

//     gameData.settingsPageButtonWrapper.append(buttonSum, buttonSubstr, buttonMultiple);
//     main.append(gameData.settingsPageButtonWrapper);
//   }
// }
