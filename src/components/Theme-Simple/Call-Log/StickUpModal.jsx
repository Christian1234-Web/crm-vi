import React from "react";
import Modal from "react-awesome-modal";

const StickUpModal =({ children, width, effect, visible, onClickAway }) => {
  return (
    <Modal
      visible={visible}
      width={width}
      effect={effect}
      onClickAway={onClickAway}
    >
      {children}
    </Modal>
  );
};
export default StickUpModal;




