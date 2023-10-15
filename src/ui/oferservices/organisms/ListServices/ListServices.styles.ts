import { css } from "@emotion/css";

import { flex, text } from "@mixins";
import * as responsive from "./ListServices.styles.responsive";

export const listservices = css`
position: relative;
background-color: var(--bg-gray);
height: 100%;
width: 100%;
margin-top: -10em;
z-index: -5;
background-color: #253883;
border-bottom: 1px solid white;
  ${responsive.listservices}
`;

export const container = css`
  ${flex({ justify: "flex-end", align: "center", gap: "10px" })}
  width: 100%;
  height: 100%;
  padding: 80px;
  ${responsive.container}
`;

export const boxSection = css`
  ${flex({ justify: "flex-end", align: "flex-start", gap: "10px" })}
  flex-direction: column;
  border-right: 1px solid rgba(1, 28, 77, 1);
  ${responsive.boxSection}
`;

export const box = css`
  ${flex({ justify: "space-between", align: "center", gap: "10px" })}
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 15%;
  max-width: 30%;
  ${responsive.box}
`;

export const boxLists = css`
  ${flex({ justify: "space-between", align: "flex-start", gap: "10px" })}
  flex-wrap: wrap;
  padding: 50px;
  width: 100%;
  ${responsive.boxLists}
`;

export const subtitle = css`
  ${text({ size: 1.8, height: 2.4, weight: 400 })}
  color: white;
  max-width: 100%;
  text-align: center;
`;

export const title = css`
  ${text({ size: 6.0, height: 8.4, weight: 400 })}
  color: white;
  width: 100%;
  border-bottom: 1px solid rgba(1, 28, 77, 1);
`;

export const section = css`
  ${flex({ justify: "flex-start", align: "flex-start", gap: "10px" })}
  flex-direction: column;
`;

export const description = css`
  ${text({ size: 1.6, height: 2.4, weight: 400, align: "left" })}
  color: white;
  width: 100%;
`;

export const descriptionOne = css`
  ${text({ size: 1.6, height: 2.4, weight: 400, align: "left" })}
  color: white;

  width: 80%;
  padding: 20px;
${responsive.descriptionOne}

`;

export const image = css`
width: 800px;
height: 417px;
${responsive.image}

`;
