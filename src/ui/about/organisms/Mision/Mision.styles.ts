import { css } from "@emotion/css";
import { bgimage, flex, text } from "@mixins";
import * as responsive from "./Mision.styles.responsive";

export const operators = css`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 50px;
  padding: 50px;
  border-bottom: 1px solid white;
  ${responsive.operators}
`;

export const imageStyles = (image: string) => css`
  ${bgimage({ image, size: "cover", position: "bottom" })}
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -2;
  ${responsive.imageStyles}
  `;

export const imageStyles2 = (image: string) => css`
${bgimage({ image, size: "contain", position: "center" })}
position: absolute;
width: 279px;
height: 287px;
top: 40%;
left: 50%;
transform: translate(-50%, -50%);
opacity: 0.5;
z-index: 0;
`;

export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(37, 56, 131, 0) -84.09%, #253883 100%);
  opacity: 0.7;
  z-index: -1;
`;

export const containerLeft = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "26px" })}
  flex-direction: column;
  width: 100%;
  padding: 52px;
  ${responsive.containerLeft}

`;

export const containerRight = css`
  ${flex({ justify: "center", align: "flex-start", gap: "26px" })}
  flex-direction: column;
  width: 60%;
  ${responsive.containerRight}
`;

export const dividerStyles = css`
  width: 70%;
  height: 1px;
  border: 0;
  border-top: 1px solid white;
  ${responsive.dividerStyles}
`;

export const divider = css`
  width: 100%;
  height: 1px;
  border: 0;
  border-top: 1px solid white;

`;

export const title = css`
  ${text({ size: 7.0, weight: 400 })}
  text-transform: uppercase;
  color: white;
  ${responsive.title}

`;

export const description = css`
  ${text({ size: 1.6, weight: 400, height: 2.4 })}
  max-width: 50%;
  padding-left: 50px;
  color: white;
  ${responsive.description}
`;

export const descriptioTwo = css`
  ${text({ size: 1.6, weight: 400, height: 2.4 })}
  max-width: 80%;
  padding-left: 50px;
  color: white;
  ${responsive.description}
`;
