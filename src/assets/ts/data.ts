interface iExample {
  example: string;
  answer: number;
}

interface iData {
  operation: string;
  examples: iExample[];
  current: iExample;
}

const data: iData = {
  operation: '',
  examples: [],
  current: { example: '', answer: 0 },
};

export { iExample, data };
