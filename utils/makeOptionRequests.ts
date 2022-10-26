const makeOptionRequests = (
  optFlat: string[],
  price: string[],
  opt: string[][]
) => {
  let options: Array<Object> = [];

  const len = optFlat.length;

  let count = 0;
  for (let i = 0; i < len + opt.length; i++) {
    if (optFlat[i] !== "") {
      const option: object = {
        optionName: optFlat[i],
        price: parseInt(price[count]),
      };

      options.push(option);
      count++;
    }
  }

  return options;
};

export const makeOptionGroupRequests = (
  optFlat: string[],
  price: string[],
  optNameAll: string[],
  opt: string[][],
  optName: string,
  imageUrl: string,
  itemExplain: string,
  itemCategory: string
) => {
  let optLen = [];

  for (let i = 0; i < opt.length; i++) {
    optLen.push(opt[i].length);
  }

  const optRequests = makeOptionRequests(optFlat, price, opt);

  let eachGroup: any = [];

  let start = 0;

  for (let i = 0; i < optLen.length; i++) {
    eachGroup.push({
      ["options"]: optRequests.slice(start, start + optLen[i]),
      ["optionGroupName"]: optNameAll[i],
      ["basic"]: i === 0 ? "true" : "false",
    });

    start += optLen[i];
  }

  eachGroup = {
    ["itemName"]: optName,
    ["imageUrl"]: imageUrl,
    ["information"]: itemExplain,
    ["category"]: itemCategory,
    ["optionGroups"]: eachGroup,
  };

  return eachGroup;
};
