export const makeCartItems = (
  optSelect: { [key: string]: string },
  optGroupNames: string[],
  optGroupValue: string[][],
  optionLen: number,
  optPrice: number[][],
  itemId: number,
  count: number,
  names: string,
  image: string
) => {
  let Chose: number[] = [];
  let strA: string[] = Object.keys(optSelect).map((item) => optSelect[item]);

  let i = 0;
  for (let x of strA) {
    if (x === "") Chose.push(0);
    else {
      Chose.push(optGroupValue[i].indexOf(x));
    }

    i++;
  }

  let cartOption: Array<Object> = [];
  let totalPrice = 0;

  for (let i = 0; i < optionLen; i++) {
    let temp = {
      cartOptions: [
        {
          name: optGroupValue[i][Chose[i]],
          price: optPrice[i][Chose[i]],
        },
      ],
      name: optGroupNames[i],
    };

    cartOption.push(temp);
    totalPrice += optPrice[i][Chose[i]];
  }

  const value: Object = {
    itemId: itemId,
    name: names,
    count: count,
    imageUrl: image,
    cartOptionGroups: cartOption,
  };

  return [value, totalPrice];
};
