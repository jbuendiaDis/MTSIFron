import { css } from "@emotion/css";

import * as responsive from "./home.styles.responsive";

export const section = css`
  display: flex;
  min-height: 70vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${responsive.section}
`;

export const h1 = css`
  width: 100%;
  text-align: center;
  ${responsive.h1}
`;

export const welcome = css`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding: 0 0 calc(100% * 495 / 2048) 0;
  ${responsive.welcome}
`;

export const image = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: block;
  ${responsive.image}
`;
