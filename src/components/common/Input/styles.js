import styled, { css } from "styled-components";
import { rem } from "../../../styles/tools";
import { white, grey30, black50 } from "../../../styles/settings";

export const InputField = styled.input`
  height: ${rem(45)};
  margin: 1em 0 4em;
  padding: 0;
  letter-spacing: 0.025em;
  background: transparent;
  text-transform: uppercase;
  color: white;
  border: none;
  border-bottom: solid thin white;
  color: #e8e8e8;
  color: rgba(255, 255, 255, 0.7);
  ::-webkit-input-placeholder {
    color: white;
    opacity: 0.35;
  }
  ::-moz-placeholder {
    color: white;
    opacity: 0.35;
  }
  ::-ms-input-placeholder {
    color: white;
    opacity: 0.35;
  }
  ::-moz-placeholder {
    color: white;
    opacity: 0.35;
  }
  :focus {
    outline: none;
    color: white;
    ::-webkit-input-placeholder {
      color: white;
      opacity: 0.7;
    }
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `};
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative;
  height: ${rem(26)};
  justify-content: center;
`;
