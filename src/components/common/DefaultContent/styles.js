import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { black30, black50 } from "../../../styles/settings";

export const Wrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};

  ${media.md(css`
    padding: ${rem(50)} ${rem(10)};
  `)};
`;

export const IconWrapper = styled.div`
  margin-bottom: ${rem(11)};

  ${media.md(css`
    margin-bottom: ${rem(15)};
  `)};
`;

export const PrimaryText = styled.h3`
  font-family: "OpenSans Regular";
  font-size: ${rem(16)};
  letter-spacing: ${rem(0.5)};
  text-align: left;
  color: ${black30};
  margin-bottom: ${rem(10)};
  display: inline-block;
  text-align: center;

  ${media.md(css`
    font-size: ${rem(28)};
    margin-bottom: ${rem(20)};
  `)};
`;
export const SecondaryText = styled.p`
  font-family: "OpenSans Regular";
  font-size: ${rem(13)};
  letter-spacing: ${rem(0.6)};
  color: ${black50};
  line-height: 1.45;
  text-align: center;

  ${media.md(css`
    font-size: ${rem(22)};
    line-height: 1.45;
  `)};
`;
