import { Modal } from "antd";
import "./ModalCustom.scss";
import React, { useState } from "react";

const ModalCustom = (props) => {
  return (
    <Modal
      title={null}
      open={props.isOpenModal}
      onOk={props.handleModal}
      footer={null}
      header={null}
      width={1000}
      onCancel={props.handleModal}>
      {props.children}
    </Modal>
  );
};

export default ModalCustom;
