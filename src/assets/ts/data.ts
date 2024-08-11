interface iExample {
  example: string;
  answer: number;
}

interface iData {
  current: iExample;
  examples: iExample[];
  mistakes: iExample[];
  operation: string;
}

const data: iData = {
  current: { example: '', answer: 0 },
  examples: [],
  mistakes: [],
  operation: '',
};

export { iExample, data };
