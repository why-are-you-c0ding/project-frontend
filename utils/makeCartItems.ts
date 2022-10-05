export const makeCartItems = (
  a: any,
  b: string[],
  c: string[][],
  d: string[],
  e: number[],
  f: number,
  g: number[][],
  itemId: number,
  count: number,
  names: string
) => {
  let Chose: number[] = [];
  let strA: string[] = Object.keys(a).map((item) => a[item]);

  let i = 0;
  for (let x of strA) {
    if (x === "") Chose.push(0);
    else {
      Chose.push(c[i].indexOf(x));
    }

    i++;
  }

  let cartOption: Array<Object> = [];
  let totalPrice = 0;

  for (let i = 0; i < f; i++) {
    let temp = {
      cartOptions: [
        {
          name: c[i][Chose[i]],
          price: g[i][Chose[i]],
        },
      ],
      name: b[i],
    };

    cartOption.push(temp);
    totalPrice += g[i][Chose[i]];
  }

  const value: Object = {
    itemId: itemId,
    name: names,
    count: count,
    cartOptionGroups: cartOption,
  };

  return [value, totalPrice];
};
