import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const Content = styled.div`
  margin-top: ${rem(33)};

  a {
    width: auto;
  }

  ${media.md(css`
    margin-top: ${rem(50)};
  `)};
`;

export const Wrapper = styled.div`
  svg {
    height: ${rem(75)};
    width: auto;

    ${media.md(css`
      height: auto;
    `)};
  }
`;
