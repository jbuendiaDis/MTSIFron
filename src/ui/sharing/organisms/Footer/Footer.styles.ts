import { css } from "@emotion/css";
import { flex } from "@mixins";
import * as responsive from "./Footer.styles.responsive";

export const containerStyles = (rec1: string, rec2: string) => css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: rgba(37, 56, 131, 1);
  background-image: url(${rec1}), url(${rec2}) ;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left bottom 90%, left bottom 90%;
`;
export const contentStyles = css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 50px;
    gap: 5%;
    box-sizing: border-box;
  ${responsive.contentStyles}
  `;

export const contentCard = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "15px" })}
  flex-direction: column;
  width: 30%;
  ${responsive.contentCard}
`;
export const box = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "50px" })}
  width: 45%;
  ${responsive.section}

`;
export const section = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "50px" })}
  flex-wrap: wrap;
  width: 55%;
  ${responsive.section}
`;

export const legacyContent = css`
  ${flex({ justify: "center", align: "center", gap: "15px" })}
  color: white;
  margin-top: -50px;
  padding-bottom: 20px;
  width: 100%;
  ${responsive.legacyContent}

`;
export const titleStyles = css`
font-size: clamp(15px, 20px, 25px);
font-weight: bold;
color: white;
`;

export const textStyles = css`
font-size: 1.8rem;
line-height: 1;
color: white;
margin-bottom: 1rem;
${responsive.textStyles}
`;

export const phoneStyles = css`
font-size: 1.8rem;
color: white;
${responsive.textStyles}
`;

export const bottomSectionStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  ${responsive.bottomSectionStyle}
`;

export const logoStyle = css`
    /* margin-right: 10px; */
    /* padding-right: 40px; */
    height: 141px;
    width: 218px;
`;

export const dividerStyle = css`
  height: 1px;
  width: 100%;
  margin-top: 20px;
  background-color: white;
`;
