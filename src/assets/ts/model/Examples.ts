import iExample from './iExample';

export default class Examples {
  examplesArr: iExample[];

  constructor(operation: string) {
    this.examplesArr =
      operation === '+'
        ? this.returnSum()
        : operation === '-'
          ? this.returnSubstr()
          : this.returnMultiple();
  }

  private shuffle(arr: iExample[]): iExample[] {
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

  private returnSum() {
    const arr = [];
    for (let i = 1; i < 19; i += 1) {
      for (let j = 1; j + i <= 20; j += 1) {
        const example = `${i} + ${j}`;
        const answer = i + j;
        arr.push({ example: example, answer: answer });
      }
    }
    return this.shuffle(arr);
  }

  private returnSubstr() {
    const arr = [];
    for (let i = 20; i >= 1; i -= 1) {
      for (let j = 1; i - j >= 1; j += 1) {
        const example = `${i} - ${j}`;
        const answer = i - j;
        arr.push({ example: example, answer: answer });
      }
    }
    return this.shuffle(arr);
  }

  private returnMultiple() {
    const arr = [];
    for (let i = 1; i <= 10; i += 1) {
      for (let j = 1; j <= 10; j += 1) {
        const example = `${i} × ${j}`;
        const answer = i * j;
        arr.push({ example: example, answer: answer });
      }
    }
    return this.shuffle(arr);
  }

  return() {
    return this.examplesArr;
  }
}
