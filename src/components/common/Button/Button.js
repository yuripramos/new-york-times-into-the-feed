import React from "react";
import { bool, node, string, func, number } from "prop-types";

import { ButtonTag, RouterLinkTag } from "./styles";
import LocalLoading from "../../common/LocalLoading";
function Button({
  children,
  onClick,
  type,
  disabled,
  width,
  opacity,
  to,
  isCallToAction,
  loading
}) {
  if (to) {
    return (
      <RouterLinkTag
        width={width}
        onClick={onClick}
        isCallToAction={isCallToAction}
        to={to}
        disabled={disabled}
        loading={loading.toString()}
      >
        {loading ? <LocalLoading /> : children}
      </RouterLinkTag>
    );
  }
  return (
    <ButtonTag
      width={width}
      type={type}
      disabled={disabled}
      onClick={onClick}
      opacity={opacity}
      loading={loading}
    >
      {children}
    </ButtonTag>
  );
}

Button.displayName = "Button";

Button.defaultProps = {
  type: "button",
  disabled: false,
  width: null,
  onClick: null,
  className: null,
  to: null,
  loading: false,
};

Button.propTypes = {
  children: node.isRequired, // eslint-disable-line
  isCallToAction: bool,
  disabled: bool,
  type: string,
  width: string,
  onClick: func,
  opacity: number,
  loading: bool
};

export default Button;
