import React, { FC, useCallback } from "react";
import { CreateModal } from "@components/UI/Menu/styles";

interface Props {
  show: boolean;
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
  closeButton?: boolean;
  children: React.ReactNode;
}

const Menu: FC<Props> = ({ children, show, onCloseModal, closeButton }) => {
  if (!show) return null;

  return (
    <div>
      <CreateModal onClick={onCloseModal}>
        <div>{children}</div>
      </CreateModal>
    </div>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
