import React, { ReactNode } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
  footer: ReactNode;
  width?: string;
  height?: string;
}
export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  content,
  footer,
  width = "30rem",
  height = "20rem",
}: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />

      <ModalContent
        maxW={width}
        h={height}
        shadow={"boxShadow-sign-up"}
        rounded={"none"}
        p={"1.2rem"}
        bg={"white"}
      >
        <ModalHeader
          fontSize={"1.4rem"}
          fontWeight={700}
          bg={"var(--white)"}
          color={"var(--black)"}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton
          fontSize={"1rem"}
          color={"var(--gray-light)"}
          mt={"0.6rem"}
          mr={"0.8rem"}
        />
        <ModalBody>{content}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
