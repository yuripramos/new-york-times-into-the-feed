import React from "react";
import { string, func, oneOfType, bool, shape, arrayOf } from "prop-types";
import Icon from "../../Icon";

import { Title, IconContainer, Description, CloseBtn, Close } from "../styles";
import { DefaultContainer } from "./styles";

export function renderDescription(description) {
  if (typeof description === "string") {
    return <Description>{description}</Description>;
  }

  if (Array.isArray(description)) {
    return description.map(descriptionText => (
      <Description key={descriptionText}>{descriptionText}</Description>
    ));
  }

  return null;
}

function Default({ modalSettings, closeModal }) {
  if (!modalSettings) {
    return null;
  }

  const { title, icon, description, onClose } = modalSettings;

  return (
    <DefaultContainer>
      {icon && (
        <IconContainer>
          <Icon name={icon} width="37" height="37" />
        </IconContainer>
      )}

      {title && <Title>{title}</Title>}

      {renderDescription(description)}

      <CloseBtn
        onClick={() => {
          closeModal && closeModal();
          onClose && onClose();
        }}
      >
        <Icon name="close" width="14" height="14" />
        <Close>Close</Close>
      </CloseBtn>
    </DefaultContainer>
  );
}

Default.defaultProps = {
  modal: null
};

Default.propTypes = {
  modal: oneOfType([
    bool,
    shape({
      title: string,
      icon: string,
      description: oneOfType([arrayOf(string), string]),
      onClose: func
    })
  ])
};

export default Default;
