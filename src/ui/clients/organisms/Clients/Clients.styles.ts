import { css } from "@emotion/css";
import { bgimage, flex, text } from "@mixins";
import * as responsive from "./Clients.styles.responsive";

export const clients = css`
  width: 100%;
  height: 120vh;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid white;
  ${responsive.clients}
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 50px;
  padding: 50px;
  width: 100%;
  z-index: 2;
  ${responsive.container}

`;

export const imageStyles = (image: string) => css`
  ${bgimage({ image, size: "cover", position: "bottom" })}
  position: absolute;
  width: 100%;
  height: 150vh;
  top: -20%;
  right: 0; 
  z-index: -3;
  ${responsive.imageStyles}
  `;

export const overlay = css`
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 150vh;
  background: rgba(37, 56, 131, 0.7);
  z-index: -2;
`;

export const containerLeft = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "26px" })}
  flex-direction: column;
  width: 100%;
  padding: 52px;
  z-index: 0;
  ${responsive.containerLeft}

`;

export const containerRight = css`
  ${flex({ justify: "center", align: "flex-start", gap: "26px" })}
  flex-direction: column;
  width: 60%;
  z-index: 2;
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
  ${text({ size: 6.0, weight: 400 })}
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

export const image = css`
  width: 128px;
  height: 128px;
  ${responsive.image}
`;

export const link = css`
  ${text({ size: 1.6, height: 2.4, weight: 400 })}
  color: var(--primary-color);
  padding-left: 10%;
  z-index: 1;
`;

export const box = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 0;
`;
