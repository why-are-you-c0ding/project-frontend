import React from "react";
import { approvalItemInfo } from "@typings/items";
import {
  EachApprovalImg,
  EachApprovalInfo,
  EachApprovalWrapper,
} from "@components/Approval/EachApproval/Style";

interface Props {
  itemInfos: (approvalItemInfo & { image: string })[];
}
export default function EachApproval({ itemInfos }: Props) {
  console.log(itemInfos);

  return (
    <div>
      {itemInfos?.map((item) => {
        return (
          <EachApprovalWrapper key={item.itemId}>
            <EachApprovalImg>
              <img src={item.image} alt={"상품 사진"} />
            </EachApprovalImg>
            <EachApprovalInfo>
              <div>
                <span>{item.name}</span>
                {item.orderOptionGroups.map((orderOptionGroup, idx) => {
                  return (
                    <span key={idx}>{orderOptionGroup.orderOption.name}</span>
                  );
                })}
              </div>
              <div>{item.count}개</div>
              <div>{item.totalPayment}원</div>
            </EachApprovalInfo>
          </EachApprovalWrapper>
        );
      })}
    </div>
  );
}
