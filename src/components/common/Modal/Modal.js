import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";
import { Overlay } from "../../../styles/objects";
/*eslint-disable*/
/*Modal COMPS*/
import DefaultModal from "./Default";

import { Wrapper, Content } from "./styles";



export const MODAL_TYPES = {
  DEFAULT: "Default"
};

const MODAL_COMPONENTS = {
  Default: DefaultModal
};

function Modal(props) {
  if (props.modalSettings && props.modalSettings.isOpen) {
    const { type } = props.modalSettings;

    const ModalContent =
      MODAL_COMPONENTS[type] || MODAL_COMPONENTS[MODAL_TYPES.DEFAULT];

    return (
      <Wrapper>
        <Content>
          <ModalContent {...props} />
        </Content>
        <Overlay data-test="Overlay" />
      </Wrapper>
    );
  }

  return null;
}

Modal.defaultProps = {
  modal: null
};

Modal.propTypes = {
  modal: oneOfType([
    shape({
      isOpen: bool,
      type: string,
      title: string,
      icon: string,
      description: oneOfType([arrayOf(string), string]),
      onClose: func
    })
  ])
};

export default Modal;
