import { css } from "@emotion/css";
import { bordergradient, content, flex, text } from "@mixins";

import * as responsive from "./Header.styles.responsive";

export const header = (hero: string | null) => css`
  width: 100%;
  padding: 25px 100px;
  z-index: -1;
  background: ${hero === "hero" ? "rgba(37, 56, 131, 1)" : "transparent"};
  &[data-fixed="true"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }
  ${responsive.header}
`;

export const container = css`
  ${content({ width: "1920px", padding: "0" })}
  ${flex({ justify: "space-between", gap: "5px" })}
`;

export const logo_link = css`
  display: block;
  width: 100%;
  max-width: 300px;
  ${responsive.logo_link}
`;

export const logo_wrapper = css`
  display: block;
  width: 100%;
  height: 100%;
`;

export const logo = css`
  display: block;
  width: 100%;
  height: 110px;
  object-fit: contain;
  ${responsive.logo}
`;

export const nav = css`
  ${flex({ justify: "flex-end", gap: "10px" })}
  width: 100%;
  color: white;
  ${responsive.nav}
`;

export const list = css`
  ${flex({ justify: "flex-end", gap: "20px" })}
  list-style: none;
  ${responsive.list}
`;

export const item = css`
  width: max-content;
`;

export const link = css`
  ${text({ size: 1.9, weight: 600, height: 2.4 })}
  min-width: max-content;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  &:hover,
  &.active {
    background: linear-gradient(to right, #E73E3B, #FF7A68);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
`;

export const menu = css`
  ${bordergradient()}
  ${flex({ justify: "center", gap: "20px" })}
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 20px;
  flex-direction: column;
  list-style: none;
  border-radius: 10px;
  transition: transform .5s ease;
  will-change: transform;
  right: -100%;
  top: 0;
  z-index: 5;
  background-color: rgba(37, 56, 131, 0.9);
  &[data-open="true"] {
    transform: translateX(-100%);
  }
`;

const time = ".25s";
export const burguer = css`
  position: relative;
  display: block;
  width: 26px;
  min-width: 26px;
  height: 26px;
  min-height: 26px;
  z-index: 6;
  span {
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background: var(--text-white);
    left: 0;
    right: 0;
    z-index: 0;
    &:nth-of-type(1) {
      top: 3px;
      will-change: top, transform;
      transition: top ${time} ${time} ease-out,
        transform ${time} ease-out;
    }
    &:nth-of-type(2) {
      top: calc(50% - .15rem);
      will-change: opacity;
      transition: opacity ${time} ${time} ease-out;
    }
    &:nth-of-type(3) {
      bottom: 2px;
      will-change: bottom, transform;
      transition: bottom ${time} ${time} ease-out,
        transform ${time} ease-out;
    }
  }
  &[data-active="true"] {
    span {
      background: var(--gradient);
      &:nth-of-type(1) {
        top: calc(50% - .15rem);
        transform: rotateZ(45deg);
        transition: top ${time} ease-out,
          transform ${time} ${time} ease-out;
      }
      &:nth-of-type(2) {
        pointer-events: none;
        opacity: 0;
        transition: opacity ${time} ease-out;
      }
      &:nth-of-type(3) {
        bottom: calc(50% - .15rem);
        transform: rotateZ(-45deg);
        transition: bottom ${time} ease-out,
          transform ${time} ${time} ease-out;
      }
    }
  }
`;
