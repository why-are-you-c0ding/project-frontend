import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import React from "react";
import { EditStocksWrapper } from "@components/SellerPages/DetailRegisteredItemsBodys/EditStocks/styles";

export function EditStocks() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  console.log(isEditing);

  return (
    <EditStocksWrapper>
      {isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
          <IconButton
            aria-label="재고 수정 최종"
            icon={<span>저장</span>}
            {...getSubmitButtonProps()}
          />
          <IconButton
            aria-label="재고 수정 취소"
            icon={<span>취소</span>}
            {...getCancelButtonProps()}
          />
        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <IconButton
            aria-label="재고 수정 버튼"
            size="sm"
            icon={<span>수정</span>}
            {...getEditButtonProps()}
          />
        </Flex>
      )}
    </EditStocksWrapper>
  );
}
