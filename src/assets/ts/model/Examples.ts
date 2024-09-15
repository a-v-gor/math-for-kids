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

  private shuffle = (arr: iExample[]): iExample[] => {
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
  };

  private returnScoreSumSubstr = (num: number) => {
    let result = 0;
    switch (num % 10) {
      case 1:
      case 0:
        result = 1;
        break;

      default:
        result = 2;
    }
    if (num > 10) {
      result += 1;
    }
    return result;
  };

  private returnScoreMultiple = (num: number) => {
    switch (num) {
      case 1:
        return 5;

      case 10:
        return 6;

      default:
        return 7;
    }
  };

  private returnSum = () => {
    const arr = [];
    for (let i = 1; i < 19; i += 1) {
      for (let j = 1; j + i <= 20; j += 1) {
        const example = `${i} + ${j}`;
        const answer = i + j;
        const score =
          this.returnScoreSumSubstr(i) + this.returnScoreSumSubstr(j);
        arr.push({ example: example, answer: answer, score: score });
      }
    }
    return this.shuffle(arr);
  };

  private returnSubstr = () => {
    const arr = [];
    for (let i = 20; i >= 1; i -= 1) {
      for (let j = 1; i - j >= 1; j += 1) {
        const example = `${i} - ${j}`;
        const answer = i - j;
        const score =
          this.returnScoreSumSubstr(i) + this.returnScoreSumSubstr(j);
        arr.push({ example: example, answer: answer, score: score });
      }
    }
    return this.shuffle(arr);
  };

  private returnMultiple = () => {
    const arr = [];
    for (let i = 1; i <= 10; i += 1) {
      for (let j = 1; j <= 10; j += 1) {
        const example = `${i} × ${j}`;
        const answer = i * j;
        const score = Math.min(
          this.returnScoreMultiple(i),
          this.returnScoreMultiple(j)
        );
        arr.push({ example: example, answer: answer, score: score });
      }
    }
    return this.shuffle(arr);
  };

  return() {
    return this.examplesArr;
  }
}
