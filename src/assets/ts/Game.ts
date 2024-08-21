// import { data } from './data';
// import Settings from './Settings';
// import returnElement from './view/returnElement';
// import StartPage from './StartPage';

// export default class Game {
//   example: HTMLDivElement;
//   keysWrapper: HTMLDivElement;
//   answerField: HTMLDivElement;
//   infoBlock: HTMLDivElement;
//   navHome: HTMLLIElement;

//   constructor() {
//     this.example = <HTMLDivElement>returnElement({
//       tag: 'div',
//       classes: ['example__text'],
//       textContent: '00 + 00 =',
//     });
//     this.keysWrapper = <HTMLDivElement>returnElement({
//       tag: 'div',
//       classes: ['keys__wrapper'],
//     });

//     this.answerField = <HTMLDivElement>returnElement({
//       tag: 'div',
//       classes: ['example__input'],
//       textContent: '??',
//     });
//     this.infoBlock = <HTMLDivElement>returnElement({
//       tag: 'div',
//       classes: ['game__info'],
//       textContent: 'Введи число и нажми «✓»',
//     });
//     this.navHome = <HTMLLIElement>returnElement({
//       tag: 'li',
//       classes: ['menu__item', 'menu__home'],
//     });
//   }

//   private show() {
//     const body = document.body;
//     const header = returnElement({
//       tag: 'div',
//       classes: ['header'],
//     });
//     const nav = returnElement({
//       tag: 'nav',
//       classes: ['menu'],
//     });
//     const navUl = returnElement({
//       tag: 'ul',
//       classes: ['menu__ul'],
//     });
//     const title = returnElement({
//       tag: 'h1',
//       classes: ['title'],
//       textContent: data.operation,
//     });
//     const main = returnElement({
//       tag: 'div',
//       classes: ['main', 'game__main'],
//     });
//     const exampleWrapper = returnElement({
//       tag: 'div',
//       classes: ['example__wrapper'],
//     });
//     const keysTextsArr = [];
//     for (let i = 1; i < 10; i += 1) {
//       keysTextsArr.push(`${i}`);
//     }
//     keysTextsArr.push('×', '0', '✓');
//     for (let i = 0; i < keysTextsArr.length; i += 1) {
//       const classesArr = ['button', 'keys__button'];
//       if (keysTextsArr[i] === '×') {
//         classesArr.push('keys__cancel');
//       }
//       if (keysTextsArr[i] === '✓') {
//         classesArr.push('keys__submit');
//       }
//       const keyButton = returnElement({
//         tag: 'button',
//         classes: classesArr,
//         attrib: [
//           {
//             name: 'name',
//             value: keysTextsArr[i],
//           },
//         ],
//         textContent: keysTextsArr[i],
//       });
//       this.keysWrapper.append(keyButton);
//     }

//     navUl.append(this.navHome);
//     nav.append(navUl);
//     header.append(title, nav);
//     exampleWrapper.append(this.example, this.answerField);
//     main.append(this.infoBlock, exampleWrapper, this.keysWrapper);
//     body.append(header, main);
//   }

//   // private checkAnswer() {
//   //   if (Number(this.answerField.innerText) === data.current.answer) {
//   //     this.infoBlock.innerText = 'Верно!';
//   //     setTimeout(() => {
//   //       this.infoBlock.innerText = 'Введи число и нажми «✓»';
//   //       this.startNextExample();
//   //     }, 1100);
//   //   } else {
//   //     if (!data.mistakes.includes(data.current)) {
//   //       data.mistakes.push(data.current);
//   //     }
//   //     this.infoBlock.innerText = 'Неправильно. попробуй еще раз.';
//   //     this.answerField.innerText = '??';
//   //   }
//   // }

//   // private useGame(eventValue: string) {
//   //   switch (eventValue) {
//   //     case '×':
//   //       this.answerField.innerText = '??';
//   //       break;
//   //     case '✓':
//   //       this.checkAnswer();
//   //       break;
//   //     default:
//   //       if (
//   //         (this.answerField.innerText.length > 1 &&
//   //           this.answerField.innerText !== '10') ||
//   //         this.answerField.innerText === '??'
//   //       ) {
//   //         this.answerField.innerText = eventValue;
//   //       } else {
//   //         this.answerField.innerText += eventValue;
//   //       }
//   //   }
//   // }

//   // private checkPressedButton(event: Event) {
//   //   const button = <HTMLButtonElement>event.target;
//   //   if (button.classList.contains('button')) {
//   //     this.useGame(button.name);
//   //   }
//   // }

//   private checkKeyboardButtons(event: KeyboardEvent) {
//     const key = event.key;
//     if (key.match(/\d/)) {
//       this.useGame(key);
//     } else if (key === 'Backspace' || key === 'Delete' || key === 'Escape') {
//       this.useGame('×');
//     } else if (key === 'Enter') {
//       this.useGame('✓');
//     }
//   }

//   private startListenKeyboardButtons() {
//     document.addEventListener('keyup', (event: KeyboardEvent) =>
//       this.checkKeyboardButtons(event)
//     );
//   }

//   private stopListenKeyboardButtons() {
//     document.removeEventListener('keyup', (event: KeyboardEvent) =>
//       this.checkKeyboardButtons(event)
//     );
//   }

//   // private startListenNumButtons() {
//   //   this.keysWrapper.addEventListener('click', (event: Event) =>
//   //     this.checkPressedButton(event)
//   //   );
//   // }

//   private stopListenNumButtons() {
//     this.keysWrapper.removeEventListener('click', (event: Event) =>
//       this.checkPressedButton(event)
//     );
//   }

//   private startListenMenu() {
//     this.navHome.addEventListener('click', () => {
//       this.stop();
//       delete data.game;
//       if (data.startPage !== undefined) {
//         data.startPage.start()
//       }
//     });
//   }

//   private stopListenMenu() {
//     this.navHome.removeEventListener('click', () => {
//       this.stop();
//       delete data.game;
//       if (data.startPage !== undefined) {
//         data.startPage.start()
//       }
//     });
//   }

//   // private startNextExample() {
//   //   console.log(data.mistakes);

//   //   if (data.examples.length > 0) {
//   //     const nextExample = data.examples.pop();
//   //     if (nextExample !== undefined) {
//   //       data.current = nextExample;
//   //       this.example.innerText = `${nextExample.example} =`;
//   //       this.answerField.innerText = '??';
//   //     } else {
//   //       console.log('example is undefined');
//   //     }
//   //   } else {
//   //     console.log('no examples in array');
//   //     this.stop();
//   //   }
//   // }

//   public start() {
//     // this.show();
//     // this.startListenNumButtons();
//     this.startListenKeyboardButtons();
//     this.startListenMenu();
//     // this.startNextExample();
//   }

//   public stop() {
//     document.body.innerHTML = '';
//     this.stopListenKeyboardButtons();
//     this.stopListenNumButtons();
//     this.stopListenMenu();
//   }

//   // public new() {
//   //   data.startPage = new StartPage();
//   //   data.settings = new Settings();
//   //   data.startPage.start();
//   // }
// }
