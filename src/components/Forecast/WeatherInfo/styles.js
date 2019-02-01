import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
  width: 70%;
  display: inline-block;
`;
export const InnerContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
  display:inline-flex;
`;

export const City = styled.div`
  text-align: left;
  border-bottom: solid thin white;
  text-transform: uppercase;
  color: #e8e8e8;
  color: rgba(255, 255, 255, 0.7);
  font-family: "RobotoSlab Thin";
  font-size: ${rem(22)};
  padding: 0 ${rem(15)};
`;

export const Icon = styled.div`
  width: 100%;
  height: ${rem(150)};
`;

export const Temperature = styled.h1`
  font-size: 4.5em;
  font-weight: 300;
  line-height: 0.75;
  font-family: "RobotoSlab Regular";
  margin-top: ${rem(20)};
  width: 100%;
  ${({ tiny }) =>
    tiny &&
    css`
    margin-top: ${rem(5)};
      font-size: 1em;
  `};
`;

export const TinySpecs = styled.span`
    color: white;
    font-weight: 100;
    line-height: 1.1;
    letter-spacing: 0.025em;
    margin: 0;
    padding: 0;
    font-family: "OpenSans Thin";
    width: 100%;
    margin: ${rem(10)} 0;
    ${({ tiny }) =>
      tiny &&
      css`
        font-size: .9em;
    `};
    :nth-child(2n) {
      margin: ${rem(2)} 0;
    }
  `;

export const MainContentWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: flex-start;
  width: 65%;
  flex-wrap: wrap;
`;

export const SidebarContentWrapper = styled.div`
  display: flex;
  width: 35%;
  flex-wrap: wrap;
  text-align: right;
  height: ${rem(180)};
`;
