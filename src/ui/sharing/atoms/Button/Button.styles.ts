import { css, cx } from "@emotion/css";

import type { Props } from "./Button.proptypes";

export const button = css`
  &[data-hidden="true"] {
  }
`;

const gradient = css`
`;

const outline = css`
  span {
  }
`;

export const big = css`
`;

export const text_transform = (transform: Props["config"]["text"]) => css`
`;

export const button_gradient = cx(button, gradient);
export const button_outline = cx(button, outline);
