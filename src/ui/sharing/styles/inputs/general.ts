import { css } from "@emotion/css";
import { flex, text } from "@mixins";

import * as responsive from "./general.responsive";

export const field = css`
  position: relative;
  display: block;
  width: 100%;
  z-index: 0;
  &[data-type="password"] {
    & > span {
      right: 65px;
    }
  }
  &[data-type="checkbox"] {
    ${flex({ justify: "flex-end", gap: "8px" })}
    position: relative;
    margin-top: 18px;
    z-index: 0;
    &:hover {
      cursor: pointer;
    }
    &::before,
    &::after {
      display: block;
      content: "";
      width: 14px;
      min-width: 14px;
      height: 14px;
      min-height: 14px;
      border-radius: 3px;
      border: 2px solid var(--text-white);
    }
    &::before {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      right: 0;
      z-index: 0;
    }
    & > :is(label, p) {
      padding: 0;
    }
    & > :is(p) {
      max-width: max-content;
    }
    & > :is(span) {
      transform: translateY(100%);
      left: auto;
      right: 25px;
    }
    &[data-checked="true"] {
      &::before {
        background-color: var(--text-white);
        opacity: 0.3;
      }
    }
  }
  &[data-type="textarea"] {
    & > :is(p) {
      display: none;
    }
  }
`;

export const label = css`
  ${text({ size: 1.2, weight: 400, height: 1.6 })}
  width: 100%;
  padding: 0 20px;
  display: none;
  color: var(--text-white);
`;

export const input = css`
  ${text({ size: 1.4, weight: 500, height: 1.6 })}
  display: block;
  width: 100%;
  background-color: rgba(244, 244, 244, .2);
  padding: 10px 10px;
  color: var(--text-white);
  border-radius: 2px;
  &::placeholder {
    ${text({ size: 1.4, weight: 300, height: 2.6 })}
    color: var(--text-white);
    opacity: 0.5;
    text-transform: capitalize;
  }
`;

export const area = css`
  ${text({ size: 1.8, weight: 400, height: 2.4 })}
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(244, 244, 244, .2);
  color: var(--text-white);
  border-radius: 2px;
  resize: vertical;
  &::placeholder {
    color: var(--text-white);
    opacity: 0.5;
  }
  ${responsive.area}
`;

export const check = css`
  position: absolute;
  opacity: 0;
  z-index: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const error = css`
  ${text({ size: 1, weight: 400, height: 1 })}
  position: absolute;
  display: block;
  width: max-content;
  max-width: calc(100% - 30px);
  padding: 2px 5px;
  color: var(--error-color);
  transform: translateY(50%);
  left: 20px;
  bottom: 0;
  z-index: 0;
`;

export const show = css`
  position: absolute;
  display: block;
  width: 38px;
  height: 38px;
  bottom: 0;
  right: 20px;
  z-index: 0;
`;

export const icon = css`
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  object-fit: contain;
`;
