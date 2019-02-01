import React from "react";
import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { Link as RouterLink } from "react-router-dom";
import { white, green, green20, black30 } from "../../../styles/settings";

export const ButtonTag = styled.button`
  font-family: "RobotoSlab Regular";
  border-radius: ${rem(4)};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(45)};
  outline: none;
  padding: ${rem(5)};
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${white};
  transition: 0.2s ease-in-out color, 0.2s ease-in-out background,
    0.2s ease-in-out box-shadow, 0.2s ease-in-out border, 0.1s transform;
  white-space: nowrap;
  width: ${props => (props.width ? rem(props.width) : "100%")};
  user-select: none;
  opacity: ${props => (props.opacity && props.disabled ? props.opacity : 1)};
  background: transparent;
  transform: translateY(15px);

  ${media.md(css`
    width: ${props => (props.width ? rem(props.width) : "auto")};
  `)};

  ${media.lg(css`
    font-size: ${rem(13)};
    line-height: ${rem(48)};
  `)};

  :active {
    transform: translateY(${rem(1)});
  }
  :hover {
    background: ${white};
    color: ${black30};
    transform: translateY(20px);
  }

  ${({ isCallToAction }) =>
    isCallToAction &&
    css`
      background-color: ${green};
      box-shadow: 0 ${rem(2)} ${rem(7)} ${rem(2)} rgba(100, 100, 100, 0.3);
      color: ${white};
      :hover {
        background: ${green20};
      }
    `};
`;

export const RouterLinkTag = ButtonTag.withComponent(
  ({ isCallToAction, ...props }) => <RouterLink {...props} /> // eslint-disable-line
);
