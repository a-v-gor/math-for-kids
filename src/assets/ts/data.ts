interface iData {
  operation: string;
  examples: { example: string; answer: number }[];
}

const data: iData = {
  operation: '',
  examples: [],
};

export default data;
