import React from "react";

const Modal = ({ children, closeModal }) => {
  setTimeout(closeModal, 2000);
  return <div className="modal">{children}</div>;
};

export default Modal;
