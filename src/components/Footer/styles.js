import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { grey10, black } from "../../styles/settings";

export const ContentWrapper = styled.div`
  padding: ${rem(15)} 0;
  background: ${black}
`;

export const Signature = styled.div`
  color: ${grey10};
  font-family: "OpenSans Thin";
  font-size: ${rem(10)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: ${rem(5)};
  width: 100%;
  ${media.sm(css`
    font-size: ${rem(12)};
  `)};
  ${media.md(css`
    font-size: ${rem(14)};
  `)};
  ${media.lg(css`
    font-size: ${rem(16)};
  `)};
`;

