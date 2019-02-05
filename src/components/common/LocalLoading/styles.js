import styled, { keyframes } from "styled-components";
import { darkBlue } from "../../../styles/settings";
import { rem } from "../../../styles/tools";

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  margin-top: ${rem(40)};
  position: relative;
  height: ${rem(40)};
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Bar = styled.div`

  display: inline-block;
  width: ${rem(8)};
  height: ${rem(50)};
  margin: 0 ${rem(2)};
  border-radius: ${rem(5)};
  animation: ${loading} 1s ease-in-out infinite;
  background-color: ${darkBlue};

  :nth-child(1) {
    animation-delay: 0;
  }

  :nth-child(2) {
    animation-delay: 0.09s;
  }

  :nth-child(3) {
    animation-delay: 0.18s;
  }

  :nth-child(4) {
    animation-delay: 0.27s;
  }
`;
