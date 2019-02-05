import React from "react";
import { func, node, string, array } from "prop-types";
import { generate } from "shortid";

import {
  Wrapper,
  IconWrapper,
  PrimaryText,
  SecondaryText,
} from "./styles";

function DefaultContent({
  Icon,
  primaryText,
  secondaryTexts,
  children,
}) {
  return (
    <Wrapper>
      {Icon && (
        <IconWrapper>
           <Icon />
        </IconWrapper>
      )}
      <PrimaryText>{primaryText}</PrimaryText>
      {secondaryTexts &&
        secondaryTexts.map(item => (
          <SecondaryText key={generate()}>{item}</SecondaryText>
        ))}
      {children}
    </Wrapper>
  );
}

DefaultContent.defaultTypes = {
  secondaryTexts: [],
  Icon: () => {},
  children: null
};

DefaultContent.propTypes = {
  Icon: func,
  primaryText: string.isRequired,
  secondaryTexts: array,
  children: node
};

export default DefaultContent;
