import iExample from './iExample';
import iRecord from './iRecord';

export default interface iObjForLS {
  examples: iExample[];
  mistakes: iExample[];
  operation: string;
  score: number;
  gameTime: number;
  numMistakes: number;
  numExamples: number;
  records: iRecord[];
}
