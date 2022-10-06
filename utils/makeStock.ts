export const makeStock = (a: number[], b: number[], c: number) => {
  let stockInfos: Array<Object> = [];

  for (let i = 0; i < c; i++) {
    const stockOptions: object = {
      optionIdList: [a[i]],
      quantity: b[i],
    };

    stockInfos.push(stockOptions);
  }
  const result: Object = {
    stockInfos: stockInfos,
  };

  return result;
};
