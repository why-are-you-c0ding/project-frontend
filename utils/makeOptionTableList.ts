import { ItemInfo } from "@components/SellerPages/CreateItemsBodys/SellOption";
import { OptionInfo } from "@typings/sellerPages";

export const makeOptionTableList = (itemInfos: ItemInfo[]) => {
  const list: OptionInfo[] = [];

  for (let i = 0; i < itemInfos.length; i++) {
    const item: OptionInfo = {
      optionGroupName: itemInfos[i].name,
      options: [],
    };

    let temp = itemInfos[i].values.split(",");
    temp = temp.filter((v: string) => v.trim() !== "");
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
