import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { grey10, grey30 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  background: ${grey30};

  padding: ${rem(35)} 0;
`;

export const Signature = styled.div`
  color: ${grey10};
  font-family: "Helveticaneue Thin";
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

export const Links = styled.a`
  padding: ${rem(10)} ${rem(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
