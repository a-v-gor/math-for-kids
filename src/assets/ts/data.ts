interface iExample {
  example: string;
  answer: number;
}

interface iData {
  operation: string;
  examples: iExample[];
}

const data: iData = {
  operation: '',
  examples: [],
};

export { iExample, data };
