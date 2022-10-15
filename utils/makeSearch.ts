export const makeSearch = (a: any[], b: number) => {
  let result: Array<any> = [];

  for (let i = 0; i < b; i++) {
    const dataName: object = {
      key: a[i],
      value: a[i],
    };

    result.push(dataName);
  }

  return result;
};
