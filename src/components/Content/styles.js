import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { trueBlack, grey10 } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(25)} ${rem(10)};
  min-height: ${rem(250)};
  ${media.md(css`
    min-height: ${rem(300)};
    padding: ${rem(50)} ${rem(10)};
  `)};
`;
export const Title = styled.h1`
  font-family: "MyriadPro SemiBold";
  font-size: ${rem(30)};
  color: ${trueBlack};
  margin-top: 0;
`;

export const SubTitle = styled.h2`
  margin-top: ${rem(30)};
  font-family: "Helveticaneue Thin";
  font-weight: normal;
  font-size: ${rem(16)};
  color: ${grey10};
  padding: ${rem(0)} ${rem(80)};
`;

export const Description = styled.span`
  font-family: "Helveticaneue Thin";
  font-size: ${rem(16)};
  color: ${grey10};
`;
