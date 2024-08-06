import data from './data';

export default class Game {
  private returnSumExamples() {
    const arr = [];
    for (let i = 2; i < 18; i += 1) {
      for (let j = 2; j + i <= 20; j += 1) {
        const example = `${i} + ${j}`;
        const answer = i + j;
        arr.push({ example: example, answer: answer });
      }
    }
    return arr;
  }

  private returnSubstrExamples() {
    const arr = [];
    for (let i = 20; i >= 10; i -= 1) {
      for (let j = 1; i - j >= 1; j += 1) {
        const example = `${i} - ${j}`;
        const answer = i - j;
        arr.push({ example: example, answer: answer });
        console.log(example, answer);
      }
    }
    return arr;
  }

  private returnMultipleExamples() {
    const arr = [];
    for (let i = 1; i <= 10; i += 1) {
      for (let j = 1; j <= 10; j += 1) {
        const example = `${i} × ${j}`;
        const answer = i * j;
        arr.push({ example: example, answer: answer });
      }
    }
    return arr;
  }

  private addExamples() {
    const operation = data.operation;
    const examples =
      operation === '+'
        ? this.returnSumExamples()
        : operation === '-'
          ? this.returnSubstrExamples()
          : this.returnMultipleExamples();
    data.examples = examples;
  }

  start() {
    this.addExamples();
    console.log(data);
  }
}
