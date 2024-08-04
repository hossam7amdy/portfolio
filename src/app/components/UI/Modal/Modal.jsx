"use client";

import ReactDom from "react-dom";

import { Backdrop } from "./Backdrop/Backdrop";
import { ModalOverlay } from "./ModalOverlay/ModalOverlay";
import { useEffect, useState } from "react";

export const Modal = ({ header, body, onClose, isOpen }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={onClose} isOpen={isOpen} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          header={header}
          body={body}
          onClose={onClose}
          isOpen={isOpen}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
