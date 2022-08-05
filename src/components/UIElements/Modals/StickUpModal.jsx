import React from "react";
import { Modal } from "react-bootstrap";

const StickUpModal = ({ show, onHide, size, className, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size}
      dialogClassName={className}
      style={{ marginTop: "-30px" }}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default StickUpModal;
