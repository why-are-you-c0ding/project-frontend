const makeOptionRequests = (a: string[], b: any, d: any) => {
  let optionRequests: Array<Object> = [];

  let aryB: string[] = Object.keys(b).map((item) => b[item]);

  const len = a.length;

  let count = 0;
  for (let i = 0; i < len + d.length; i++) {
    if (a[i] !== "") {
      const option: object = {
        optionName: a[i],
        price: parseInt(b[count]),
      };

      optionRequests.push(option);
      count++;
    }
  }

  return optionRequests;
};

export const makeOptionGroupRequests = (
  a: any,
  b: any,
  c: any,
  d: any,
  optName: string,
  imageUrl: string,
  itemExplain: string
) => {
  let optLen = [];

  for (let i = 0; i < d.length; i++) {
    optLen.push(d[i].length);
  }

  const optRequests = makeOptionRequests(a, b, d);

  let eachGroup: any = [];

  let start = 0;

  for (let i = 0; i < optLen.length; i++) {
    eachGroup.push({
      ["optionRequests"]: optRequests.slice(start, start + optLen[i]),
      ["optionGroupName"]: c[i],
      ["basic"]: i === 0 ? "true" : "false",
    });

    start += optLen[i];
  }

  eachGroup = {
    ["itemName"]: optName,
    ["imageUrl"]: imageUrl,
    ["information"]: itemExplain,
    ["optionGroupRequests"]: eachGroup,
  };

  return eachGroup;
};
