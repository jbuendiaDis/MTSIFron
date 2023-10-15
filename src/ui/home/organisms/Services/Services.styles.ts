import { css } from "@emotion/css";
import { bgimage, flex, text } from "@mixins";
import * as responsive from "./Services.styles.responsive";

export const containerStyles = css`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${responsive.services}
`;

export const leftContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
`;

export const textStyles = css`
  ${flex({ justify: "space-between", align: "flex-start", gap: "50px" })}
  width: 90%;
  ${responsive.textStyles}
  
`;

export const linkStyles = css`
  ${text({ size: 2, weight: 400 })}
  color: var(--primary-color);
`;

export const rightContainerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

export const imageStylesNumber = css`
  object-fit: cover;
`;

export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #F2F2F2 0%, rgba(242, 242, 242, 0.5) 100%);
  z-index: -1;
`;

export const imageStyles = (image: string) => css`
  ${bgimage({ image, size: "cover", position: "center" })}
  position: absolute;
  width: 70%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -2;
  `;

export const imageStyles2 = (image: string) => css`
${bgimage({ image, size: "contain", position: "center" })}
position: absolute;
width: 279px;
height: 287px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: -1;
`;

export const title = css`
  ${text({ size: 7.0, weight: 400 })}
  text-transform: uppercase;
  color: var(--secondary-color);
`;

export const ulStyles = css`
  list-style-type: disc;
  width: 100%;
`;

export const ulStyles2 = css`
  list-style-type: disc;
`;

export const listItemStyles = css`
  ${text({ size: 1.6, weight: 300, height: 2.5 })}
  color: white;
`;
