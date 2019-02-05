import styled, { css } from "styled-components";
import { media, rem } from "../../../styles/tools";

export const Content = styled.div`
  ${media.sm(css`
    min-height: calc(100vh - ${rem(150)});
  `)};
  ${media.md(css`
    min-height: calc(100vh - ${rem(180)});
  `)};
  ${media.lg(css`
    min-height: calc(100vh - ${rem(173)});
  `)};
`;
