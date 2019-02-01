import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { white, grey30 } from "../../../styles/settings";

export const TabContainer = styled.ul`
  display: flex;
  position: relative;
  height: ${rem(25)};
  max-width: 100%;
  font-size: ${rem(12)};
`;

export const ContextTitle = styled.h1`
  font-family: "Roboto Bold", "Roboto";
  font-size: ${rem(20)};
  letter-spacing: ${rem(1.2)};
  color: ${white};
  text-align: center;
  white-space: nowrap;
  padding: ${rem(16)} 0;
  margin-top: -${rem(8)};
  line-height: 1.1;
  text-transform: capitalize;

  ${media.md(css`
    margin-top: 0;
    display: none;
    padding: ${rem(12)} 0;
  `)};
`;

export const Text = styled.span`
  font-family: "OpenSans Regular";
  font-size: ${rem(10)};
  letter-spacing: ${rem(1.3)};
  color: ${white};
  transition: 0.2s color;
  text-transform: uppercase;

  ${media.md(css`
    letter-spacing: ${rem(0.2)};
    font-size: ${rem(13)};
  `)};
`;

export const Tab = styled.li`
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  width: ${rem(100)};
  height: ${rem(41)};
  justify-content: center;
  padding-bottom: ${rem(4)};
  position: relative;
  transition: 0.2s background;
  user-select: none;
  flex: 1;

  :after {
    background-color: ${white};
    bottom: -${rem(12)};
    content: "";
    height: ${rem(3)};
    left: 50%;
    opacity: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.3s;
    width: 0;
  }

  ${media.md(css`
    height: ${rem(10)};
    padding-bottom: ${rem(5)};

    :after {
      bottom: -${rem(9)};
    }
  `)};

  ${({ active }) =>
    active &&
    css`
      cursor: none;
      pointer-events: none;

      :after {
        width: 100%;
        opacity: 1;
      }

      ${Text} {
        color: ${white};
      }
    `};

  ${({ active }) =>
    !active &&
    css`
      :hover {
        ${Text} {
          color: ${white};
        }
      }
    `};
`;

export const Wrapper = styled.nav`
  ${media.md(css`
    background-color: ${grey30};
    height: ${rem(35)};
    display: flex;
    justify-content: center;
    padding-top: ${rem(7)};
  `)};
`;
