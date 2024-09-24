import { divideArray, multipleArr, substrArray, sumArray } from './examplesArrays';
import iExample from './iExample';

export default class Examples {
  examplesArr: iExample[];

  constructor(operation: string) {
    this.examplesArr =
      operation === '+'
        ? sumArray
        : operation === '-'
          ? substrArray
            : operation === '×'
              ? multipleArr:
              divideArray;
  }

  private shuffle = (): iExample[] => {
    const result: iExample[] = [];
    for (; this.examplesArr.length > 0; ) {
      const randomNum = Math.floor(Math.random() * this.examplesArr.length);
      result.push(this.examplesArr[randomNum]);
      this.examplesArr = [
        ...this.examplesArr.slice(0, randomNum),
        ...this.examplesArr.slice(randomNum + 1, this.examplesArr.length),
      ];
    }
    return result;
  };

  return() {
    return this.shuffle();
  }
}
