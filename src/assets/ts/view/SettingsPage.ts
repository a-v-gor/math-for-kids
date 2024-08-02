import returnElement from '../common/returnElement';

export default class SettingsPage {
  show() {
    const body = document.body;
    const title = returnElement({
      tag: 'h1',
      classes: ['title'],
      textContent: 'Новая игра',
    });

    const buttonsWrapper = returnElement({
      tag: 'div',
    });
    const buttonSum = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '+ Сложение',
    });
    const buttonSubstr = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '- Вычитание',
    });
    const buttonMultiple = returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: '× Умножение',
    });

    buttonsWrapper.append(buttonSum, buttonSubstr, buttonMultiple);
    body.append(title, buttonsWrapper);
  }
}
