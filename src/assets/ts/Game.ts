import { data } from './data';
import returnElement from './returnElement';

export default class Game {
  private show() {
    const body = document.body;
    const wrapper = returnElement({
      tag: 'div',
      classes: ['wrapper'],
    });
    const header = returnElement({
      tag: 'div',
      classes: ['header'],
    });
    const main = returnElement({
      tag: 'div',
      classes: ['main'],
    });
    const exampleWrapper = returnElement({
      tag: 'div',
      classes: ['example__wrapper'],
    });

    main.append(exampleWrapper);
    wrapper.append(header, main);
    body.append(wrapper);
  }

  public start() {
    this.show();
    console.log(data);
  }
}
