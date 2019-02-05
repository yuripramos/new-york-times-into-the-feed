import styled, { css } from "styled-components";
import { rem, media } from "../../../styles/tools";
import { grey10, red10, darkestBlue } from "../../../styles/settings";

export const ContentWrapper = styled.div`
  text-align: center;
  padding: ${rem(15)} ${rem(10)};
  min-height: ${rem(250)};
  width: 100%;
  display: inline-block;
`;

export const CategoryWrapper = styled.div`
  color: #000;
  font-family: "CrimsomText Regular";
  text-align: left;
  padding: ${rem(15)} ${rem(5)};
  min-height: ${rem(100)};
  display: inline-flex;
  flex-wrap: wrap;
  border-bottom: solid 1px ${grey10};
  :nth-child(2n) {
    background: rgba(229, 229, 232, 0.1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: "OpenSans Regular";
  font-size: ${rem(16)};
  color: ${darkestBlue};
  cursor: pointer;
`;

export const Media = styled.img`
  width: 100%;
  height: ${rem(350)};
    ${media.md(css`
    height: ${rem(500)};
  `)};
  ${media.lg(css`
    height: ${rem(620)};
  `)};
`;

export const Title = styled.span`
  font-size: ${rem(38)};
  font-weight: 200;
  line-height: 0.75;
  font-family: "CrimsomText SemiBold";
  margin-top: ${rem(30)};
  width: 100%;
`;

export const PublishedDate = styled.span`
  font-family: "OpenSans Regular";
  font-size: ${rem(16)};
  margin: 1.625rem 0;
  letter-spacing: 0.05em;
  color: ${red10};
  width: 100%;
  margin: ${rem(20)} 0 ${rem(15)} 0;
`;

export const Author = styled.span`
  font-family: "OpenSans Regular";
  font-size: ${rem(12)};
  margin: ${rem(20)} 0 ${rem(10)} 0;
  width: 100%;
`;

export const Kicker = styled.span`
  font-size: ${rem(18)};
  margin: ${rem(20)} 0 ${rem(10)} 0;
  width: 100%;
`;

export const Description = styled.span`
  font-size: ${rem(22)};
  margin: ${rem(20)} 0 ${rem(10)} 0;
  width: 100%;
`;


