import { data, iExample } from './data';

export default class Game {
  private shuffleExamples(arr: iExample[]): iExample[] {
    const result: iExample[] = [];
    for (; arr.length > 0; ) {
      const randomNum = Math.floor(Math.random() * arr.length);
      result.push(arr[randomNum]);
      arr = [
        ...arr.slice(0, randomNum),
        ...arr.slice(randomNum + 1, arr.length),
      ];
    }
    return result;
  }

  private returnSumExamples() {
    const arr = [];
    for (let i = 1; i < 19; i += 1) {
      for (let j = 1; j + i <= 20; j += 1) {
        const example = `${i} + ${j}`;
        const answer = i + j;
        arr.push({ example: example, answer: answer });
      }
    }
    return this.shuffleExamples(arr);
  }

  private returnSubstrExamples() {
    const arr = [];
    for (let i = 20; i >= 1; i -= 1) {
      for (let j = 1; i - j >= 1; j += 1) {
        const example = `${i} - ${j}`;
        const answer = i - j;
        arr.push({ example: example, answer: answer });
      }
    }
    return this.shuffleExamples(arr);
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
    return this.shuffleExamples(arr);
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
    console.log(data);
  }

  start() {
    this.addExamples();
  }
}
