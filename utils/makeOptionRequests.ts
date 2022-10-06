const makeOptionRequests = (a: string[], b: any) => {
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

export const makeOptionGroupRequests = (
  a: any,
  b: any,
  c: any,
  d: any,
  optName: string
) => {
  let optLen = [];

  for (let i = 0; i < d.length; i++) {
    optLen.push(d[i].length);
  }

  const optRequests = makeOptionRequests(a, b);

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

  eachGroup = { ["itemName"]: optName, ["optionGroupRequests"]: eachGroup };

  return eachGroup;
};
