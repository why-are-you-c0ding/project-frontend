import React, { FC, useCallback } from "react";
import { CreateModal } from "@components/Menu/styles";

interface Props {
  show: boolean;
  onCloseModal: (e: React.SyntheticEvent<EventTarget>) => void;
  closeButton?: boolean;
  children: React.PropsWithChildren<{}>;
}

const Menu: FC<Props> = ({ children, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback(
    (e: React.SyntheticEvent<EventTarget>) => {
      e.stopPropagation();
    },
    []
  );

  if (!show) return null;

  return (
    <div>
      <CreateModal onClick={onCloseModal}>
        <div onClick={stopPropagation}>{children}</div>
      </CreateModal>
    </div>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
