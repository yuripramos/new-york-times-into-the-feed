import styled, { css } from "styled-components";
import { rem, media } from "../../styles/tools";
import { trueBlack } from "../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};

  ${media.md(css`
    min-height: ${rem(300)};
    padding: ${rem(20)} ${rem(10)};
  `)};
`;
export const Title = styled.h1`
  font-family: "RobotoSlab Regular";
  font-size: ${rem(30)};
  color: ${trueBlack};
  margin-top: 0;
`;
