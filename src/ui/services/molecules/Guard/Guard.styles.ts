import { css } from "@emotion/css";
import { bgimage, text } from "@mixins";
import * as responsive from "./Guard.styles.responsive";

export const containerStyles = css`
  width: 100%;
  height: 90vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -2;
  ${responsive.guard}
`;

export const leftContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  z-index: 1;
`;

export const dividerStyles = css`
  width: 70%;
  height: 1px;
  border: 0;
  border-top: 1px solid white;
  z-index: 1;
  ${responsive.dividerStyles}

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
  background: linear-gradient(90deg, #253883 30%, rgba(37, 56, 131, 0.5) 80%);
  z-index: -1;
`;

export const imageStyles = (image: string) => css`
  ${bgimage({ image, size: "cover", position: "top" })}
  position: absolute;
  width: 68%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -2;
  ${responsive.imageStyles}
  `;

export const imageStyles2 = (image: string) => css`
${bgimage({ image, size: "contain", position: "center" })}
position: absolute;
width: 179px;
height: 187px;
top: 40%;
left: 50%;
transform: translate(-50%, -60%);
opacity: 0.5;
z-index: 0;
`;

export const title = css`
  ${text({ size: 7.0, weight: 400 })}
  text-transform: uppercase;
  color: white;
  ${responsive.title}
`;
