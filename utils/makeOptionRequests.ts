export const makeOptionRequests = (a: string[], b: any) => {
  let optionRequests: Array<Object> = [];

  let aryB: string[] = Object.keys(b).map((item) => b[item]);

  const len = aryB.length;

  for (let i = 0; i < len; i++) {
    const option: object = {
      optionName: a[i],
      price: parseInt(b[i]),
    };

    optionRequests.push(option);
  }

  return optionRequests;
};
