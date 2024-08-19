// import { data } from './data';
// import Examples from './Examples';
// import returnElement from './view/returnElement';

// export default class Settings {

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
