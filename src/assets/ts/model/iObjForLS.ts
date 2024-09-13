import iExample from './iExample';

export default interface iObjForLS {
  examples: iExample[];
  mistakes: iExample[];
  operation: string;
  score: number;
}
