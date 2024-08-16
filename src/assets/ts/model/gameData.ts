import returnElement from '../view/returnElement';

const gameData = {
  startPageButtons: {
    buttonNewGame: <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Начать игру',
    }),
    buttonLoadGame: <HTMLButtonElement>returnElement({
      tag: 'button',
      classes: ['button'],
      textContent: 'Продолжить игру',
      attrib: [{ name: 'disabled', value: '' }],
    }),
  },
};

export default gameData;
