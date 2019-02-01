import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { white, grey20, grey30, darkestBlue } from "../../../styles/settings";
import Icon from "../Icon";

export const MenuList = styled.ul`
  background: ${white};
  height: 100vh;
`;

export const Divisor = styled.div`
  height: ${rem(25)};
  box-shadow: 0 ${rem(10)} ${rem(15)} ${rem(6)} rgba(159, 189, 204, 0.15);
  margin-bottom: ${rem(25)};
`;

export const LeftBorder = styled.div`
  width: ${rem(7)};
  height: 100%;
  background-color: ${darkestBlue};
  position: absolute;
  top: 0;
  left: -${rem(70)};
  display: none;
`;

export const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  height: ${rem(65)};
  font-family: Lato;
  font-size: ${rem(20)};
  color: ${grey30};
  letter-spacing: ${rem(1)};
  padding-top: ${rem(20)};
  margin: 0 ${rem(25)} 0 ${rem(70)};

  ${({ active }) =>
    active &&
    css`
      color: ${white};
    `};

  :hover {
    opacity: 0.7;
  }

  :not(:last-child) {
    border-bottom: solid ${rem(0.7)} ${grey20};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: -${rem(45)};
  top: ${rem(16)};
`;

export const Item = styled.div`
  cursor: pointer;
  flex-flow: row wrap;
  width: ${rem(80)};
  text-align: center;
  position: relative;
  font-family: "OpenSans Regular";
  border-top: solid ${rem(2)} transparent;

  ${media.md(css`
    width: ${rem(130)};
  `)};

  ${({ active }) =>
    !active &&
    css`
      :hover {
        color: ${white};
      }
    `};

  ${({ active }) =>
    active &&
    css`
      cursor: initial;
      color: ${white};
      font-weight: 600;
      border-top: solid ${rem(2)} ${white};
    `};
`;

export const MenuIcons = styled(Icon)`
  width: ${rem(18)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(9)};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.sm(css`
    width: auto;
  `)};
`;

export const Span = styled.span`
  margin-top: ${rem(9)};
  font-size: ${rem(12)};
`;

export const ListMenuItems = styled.div`
  margin: 0 auto;
  font-weight: 500;
  color: ${grey30};
  margin-top: ${rem(15)};
  display: flex;
  flex-flow: row wrap;
  height: ${rem(30)};
  justify-content: center;
`;
