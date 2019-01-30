import styled, { css } from "styled-components";
import { media, rem } from "../../../styles/tools";

export const Content = styled.div`
  ${media.sm(css`
    min-height: calc(100vh - ${rem(250)});
  `)};
  ${media.md(css`
    min-height: calc(100vh - ${rem(250)});
  `)};
  ${media.lg(css`
    min-height: calc(100vh - ${rem(320)});
  `)};
`;
