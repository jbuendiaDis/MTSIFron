/* eslint-disable max-len */
import { css } from "@emotion/css";

import { text, bgimage, flex } from "@mixins";
import type { BgimageConfig } from "@typing/globals/styles";
import * as responsive from "./Hero.styles.responsive";

export const hero = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1079px;
  width: 100%;
  margin-top: -10em;
  z-index: -4;
  ${responsive.hero}
`;

export const video = css`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -3;
`;

export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 56, 131, 0.5);
  z-index: -2;
`;

export const overlayone = (cover: BgimageConfig["image"]) => css`
${bgimage({ image: cover })}
  position: absolute;
  width: 35%;
  height: 90%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 2%;
  z-index: -1;
  ${responsive.overlayone}

`;

export const overlaytwo = (cover: BgimageConfig["image"]) => css`
${bgimage({ image: cover })}
  position: absolute;
  height: 90%;
  width: 29%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -2;
  ${responsive.overlaytwo}

`;

export const heroContent = css`
    padding-left: 5%;
    width: 80%;
  ${responsive.heroContent}

`;

export const leftTextStyles = css`
    ${text({ size: 16, height: 16, weight: 300 })}
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: white;
    z-index: 2;
  ${responsive.leftTextStyles}
  `;

export const rightTextStyles = css`
    ${text({ size: 16, height: 16, weight: 300 })}
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: white;
    z-index: 2;
  ${responsive.leftTextStyles}
`;

export const description = css`
  ${text({ size: 1.4, height: 2.4, weight: 400 })}
  width: 75%;
  color: white;
  text-align: justify;
  ${responsive.description}
`;

export const box = css`
  ${flex({ justify: "flex-end", align: "center" })}
  width: 100%;
`;
