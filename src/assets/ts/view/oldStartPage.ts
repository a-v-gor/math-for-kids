// import returnElement from './returnElement';
// import Header from './Header';
// import { data } from './data';

// export default class StartPage {
//   buttonNewGame: HTMLButtonElement;
//   buttonLoadGame: HTMLButtonElement;

//   constructor() {
//     this.buttonNewGame = <HTMLButtonElement>returnElement({
//       tag: 'button',
//       classes: ['button'],
//       textContent: 'Начать игру',
//     });

//     this.buttonLoadGame = <HTMLButtonElement>returnElement({
//       tag: 'button',
//       classes: ['button'],
//       textContent: 'Продолжить игру',
//       attrib: [{ name: 'disabled', value: '' }],
//     });
//     if (localStorage.getItem('math-for-kids') !== null) {
//       this.buttonLoadGame.disabled = false;
//     }
//   }

//   startListenButtons() {
//     this.buttonNewGame.addEventListener('click', () => {
//       this.stop();
//       data.settings?.start();
//     });
//     this.buttonLoadGame.addEventListener('click', () => {
//       this.stop();
//       data.settings?.loadData();
//     });
//   }

//   stopListenButtons() {
//     this.buttonNewGame.removeEventListener('click', () => {
//       this.stop();
//       data.settings?.start();
//     });
//     this.buttonLoadGame.removeEventListener('click', () => {
//       this.stop();
//       data.settings?.loadData();
//     });
//   }

//   show() {
//     const buttonWrapper = returnElement({
//       tag: 'div',
//       classes: ['button-wrapper'],
//     });
//     const header = new Header().return();
//     const main = returnElement({
//       tag: 'main',
//       classes: ['main'],
//     });

//     buttonWrapper.append(this.buttonNewGame, this.buttonLoadGame);
//     main.append(buttonWrapper);
//     document.body.append(header, main);
//     document.body.classList.add('start__body');
//   }

//   start() {
//     this.show();
//     this.startListenButtons();
//   }

//   stop() {
//     this.stopListenButtons();
//     document.body.innerHTML = '';
//     document.body.classList.remove('start__body');
//   }
// }
