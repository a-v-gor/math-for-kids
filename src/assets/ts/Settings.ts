// import { data } from './data';
// import Examples from './Examples';
// import returnElement from './view/returnElement';

// export default class Settings {
//   buttonWrapper: HTMLElement;

//   constructor() {
//     this.buttonWrapper = returnElement({
//       tag: 'div',
//       classes: ['button-wrapper'],
//     });
//   }

//   show() {
//     const body = document.body;

//     const header = returnElement({
//       tag: 'header',
//       classes: ['header'],
//     });

//     const title = returnElement({
//       tag: 'h1',
//       classes: ['title'],
//       textContent: 'Новая игра',
//     });

//     header.append(title);

//     const main = returnElement({
//       tag: 'main',
//       classes: ['main'],
//     });

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

//     this.buttonWrapper.append(buttonSum, buttonSubstr, buttonMultiple);
//     main.append(this.buttonWrapper);
//     body.append(header, main);
//     console.log('show settings');

//   }

//   addData(event: Event) {
//     const button: HTMLButtonElement = <HTMLButtonElement>event.target;
//     const operationText = button.innerHTML.slice(0, 1);
//     const examples = new Examples(operationText).return();
//     data.examples.push(...examples);
//     data.operation = button.innerHTML;
//   }

//   loadData() {
//     const savedOperation = localStorage.getItem('math-for-kids');
//     console.log(savedOperation);
//   }

//   addClickListener() {
//     this.buttonWrapper.addEventListener('click', (event: Event) => {
//       const button: HTMLButtonElement = <HTMLButtonElement>event.target;
//       if (button.className === 'button') {
//         this.addData(event);
//         this.stop();
//         data.game?.start();
//       }
//     });
//   }

//   removeClickListener() {
//     this.buttonWrapper.addEventListener('click', (event: Event) => {
//       this.addData(event);
//       this.stop();
//       data.game?.start();
//     });
//   }

//   start() {
//     this.show();
//     this.addClickListener();
//   }

//   stop() {
//     this.removeClickListener();
//     document.body.innerHTML = '';
//   }
// }
