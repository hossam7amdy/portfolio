import ReactDom from "react-dom";

import { Backdrop } from "../Backdrop/Backdrop";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

/*
### Modals Needs:
  1- Place to port a component to.
  2- Let the component know it has a portal to that place 
*/

export const Modal = ({ header, body, onConfirm }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay header={header} body={body} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
