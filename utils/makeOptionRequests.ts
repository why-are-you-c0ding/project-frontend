export const makeOptionRequests = (a: string[], b: string[]) => {
  let optionRequests: Array<Object> = [];

  const len = a.length;

  for (let i = 0; i < len; i++) {
    const option: object = {
      optionName: a[i],
      price: parseInt(b[i]),
    };

    optionRequests.push(option);
  }

  return optionRequests;
};
