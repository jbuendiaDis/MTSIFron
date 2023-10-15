import { css } from "@emotion/css";

import { bgimage, flex, text } from "@mixins";
import * as responsive from "./About.styles.responsive";

export const about = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110vh;
  width: 100%;
  margin-top: -10em;
  background-color: #253883;
  z-index: -2;
${responsive.about}
`;

export const aboutCover = (cover: string) => css`
${bgimage({ image: cover })}
position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const container = css`
  ${flex({ justify: "center", align: "flex-start", gap: "50px" })}
  flex-direction: column; 
  padding: 80px;
  height: 80%;
${responsive.container}

`;

export const title = css`
  ${text({ size: 1.8, height: 2.4, weight: 400 })}
  color: var(--primary-color);
  max-width: 18%;
${responsive.title}
`;

export const subtitle = css`
  ${text({ size: 7.0, height: 8.4, weight: 400 })}
  color: white;
  width: 80%;
${responsive.subtitle}

`;

export const box = css`
  ${flex({ justify: "center", align: "flex-end", gap: "20px" })}
  flex-direction: column;
  width: 75%;
${responsive.box}

`;

export const description = css`
  ${text({ size: 1.89, height: 2.4, weight: 400, align: "left" })}
  color: white;
  width: 65%;
  ${responsive.box}
`;
