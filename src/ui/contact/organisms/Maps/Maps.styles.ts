import { css } from "@emotion/css";

import { flex } from "@mixins";
import * as responsive from "./Maps.styles.responsive";

export const maps = css`
  position: relative;
  height: 100%;
  width: 100%;
  background: rgba(37, 56, 131, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 1);
${responsive.maps}
`;

export const mapContainer = css`
${flex({ justify: "space-around", align: "flex-start", gap: "10px" })}
width: 100%;
height: 100vh;
padding-top: 50px;
z-index: 0;
`;

export const addressList = css`
${flex({ justify: "space-around", align: "flex-start", gap: "30px" })}
flex-direction: column;
width: 400px;
list-style-type: none;
overflow-y: auto;
z-index: 2;
`;

export const listLi = css`
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: var(--secondary-color);
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    opacity: 0.5;
    color: var(--secondary-color);
  }
`;

export const iframe = css`
   width: 70%;
    height: 90%;
    border: none;
`;

export const titleStyles = css`
font-size: clamp(15px, 20px, 25px);
font-weight: bold;
color: white;
`;

export const textStyles = css`
font-size: 1.8rem;
line-height: 1;
margin-bottom: 1rem;
color: white;
${responsive.textStyles}
`;

export const phoneStyles = css`
font-size: 1.8rem;
color: white;

${responsive.textStyles}
`;
