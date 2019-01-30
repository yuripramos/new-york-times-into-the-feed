import styled from "styled-components";
import { rem } from "../../../../styles/tools";

export const DefaultContainer = styled.div`
  width: calc(100vw - ${rem(30)});
  max-width: ${rem(370)};
  padding-top: ${rem(16)};
`;
