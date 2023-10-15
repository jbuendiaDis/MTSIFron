import { css } from "@emotion/css";
import { flex, text } from "@mixins";

export const field = css`
  position: relative;
  z-index: 1;
`;

export const label = css`
  ${text({ size: 1.2, weight: 400, height: 1.6 })}
  width: 100%;
  padding: 0 20px;
  color: var(--text-input);
`;

export const select = css`
  width: 100%;
  &.active {
    & > p {
      transition: all .4s ease-in;
      border-radius: 20px 20px 0 0;
    }
  }
`;

export const value = css`
  ${text({ size: 1.2, weight: 400, height: 1.6 })}
  display: block;
  width: 100%;
  min-height: 38px;
  padding: 10px 20px;
  color: var(--text-input-gray);
  border-radius: 20px;
  border: 1px solid var(--text-input);
  transition: all .4s .4s ease-in;
  will-change: auto;
`;

export const options = css`
  ${flex({ justify: "flex-start" })}
  position: absolute;
  width: 100%;
  max-height: 200px;
  flex-direction: column;
  background-color: var(--bg-blue);
  border-radius: 0 0 20px 20px;
  box-shadow: var(--shadow);
  overflow-y: auto;
  top: 100%;
  left: 0;
  z-index: 0;
`;

export const option = css`
  ${text({ size: 1.2, weight: 400, height: 1.6 })}
  display: block;
  width: 100%;
  padding: 10px 20px;
  color: var(--text-input);
  &:hover {
    background: var(--gradient);
    cursor: pointer;
  }
`;

export const error = css`
  ${text({ size: 0.9, weight: 400, height: 1 })}
  position: absolute;
  display: block;
  padding: 2px 5px;
  background-color: var(--bg-blue);
  color: var(--error-color);
  transform: translateY(50%);
  left: 25px;
  bottom: 0;
  z-index: 0;
`;
