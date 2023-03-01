import { ItemInfo } from "@components/SignUpItemBodys/SellOption";
import { Option } from "../redux/reducers/signUpItemSlice";

export const makeOptionTableList = (itemInfos: ItemInfo[]) => {
  let list: Option[] = [];

  for (let i = 0; i < itemInfos.length; i++) {
    let item: Option = {
      optionGroupName: itemInfos[i].name,
      basic: i === 0,
      options: [],
    };

    let temp = itemInfos[i].values.split(",");
    temp = temp.filter((v) => v !== "");
    for (let i = 0; i < temp.length; i++) {
      item.options.push({
        optionName: temp[i].trim(),
        price: 0,
      });
    }
    list.push(item);
  }

  return list;
};
