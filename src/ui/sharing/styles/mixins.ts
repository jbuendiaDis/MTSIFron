import { css } from "@emotion/css";

import type {
  ForsizeConfig,
  FlexConfig,
  GridConfig,
  TextConfig,
  ContentConfig,
  BgimageConfig,
  BorderGradientConfig,
} from "@typing/globals/styles";

import { medias } from "./vars";

export const forsize = ({ size, content }: ForsizeConfig) => (medias[size] ? css`
  @media screen and (${medias[size]}) {
    ${content}
  }
` : "");

export const flex = ({ justify, gap, align = "center" }: FlexConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const alignContent = align ? `align-items: ${align};` : "";

  return css`
    display: flex;
    justify-content: ${justify};
    ${gapContent}
    ${alignContent}
  `;
};

export const grid = ({ columns, gap, areas }: GridConfig) => {
  const gapContent = gap ? `gap: ${gap};` : "";
  const areasContent = areas ? `grid-template-areas: ${areas};` : "";

  return css`
    display: grid;
    grid-template-columns: ${columns};
    ${areasContent}
    ${gapContent}
  `;
};

export const text = ({ size, weight, height, align }: TextConfig) => {
  const fontWeight = weight ? `font-weight: ${weight};` : "";
  const lineHeightContent = height ? `line-height: ${height}rem;` : "";
  const textAlign = align ? `text-align: ${align};` : "";

  return css`
    font-style: normal;
    font-size: ${size}rem;
    ${fontWeight}
    ${lineHeightContent}
    ${textAlign}
  `;
};

export const content = ({ width = "1500px", padding = "0 16px", margin = "0 auto" }: ContentConfig) => css`
  display: block;
  width: 100%;
  max-width: ${width};
  margin: ${margin};
  padding: ${padding};
`;

export const bgimage = ({ image, color, size = "cover", position = "center" }: BgimageConfig) => {
  const background = color
    ? `background: url(${image}), ${color};`
    : `background-image: url(${image});`;

  return css`
    ${background}
    background-size: ${size};
    background-position: ${position};
    background-repeat: no-repeat;
  `;
};

export const bordergradient = ({ size = "2px", bg = "var(--bg-box-color)" }: BorderGradientConfig = {}) => css`
  background-image: linear-gradient(${bg}, ${bg}), var(--gradient);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: ${size} solid transparent;
`;

export const textgradient = () => css`
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const paragraph = () => css`
  ${text({ size: 1.8, weight: 400, height: 3.3 })}
  letter-spacing: 0.09em;
  white-space: pre-wrap;
  ${forsize({ size: "phone-xbig", content: css`
    font-size: 1.6rem;
    line-height: 2.8rem;
  ` })}
`;

export const btn = (type: "dark" | "light" = "dark", size: "full" | "strech" = "strech") => css`
  ${text({ size: 1.2, weight: 700, height: 2.4, align: "center" })}
  display: block;
  width: 100%;
  max-width: ${size === "full" ? "100%" : "160px"};
  padding: 1px 16px;
  background: linear-gradient(to right, #E73E3B, #FF7A68);
  color: ${type === "dark" ? "var(--bg-white)" : "var(--bg-dark)"};
  text-transform: uppercase;
  letter-spacing: .2rem;
  border-radius: 2px;
  border: 1px solid transparent;
  &:hover,
  &:focus,
  &:active {
    border-color: ${type === "dark" ? "var(--bg-gold)" : "var(--bg-dark)"}; 
  }
`;
