import { css } from "@emotion/css";
import { flex, paragraph, btn } from "@mixins";

export const contact = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const title = css`
	${paragraph()}
  color: var(--text-white);
  opacity: 0.8;

`;

export const form = css`
  ${flex({ justify: "flex-start", gap: "20px", align: "flex-start" })}
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
`;

export const box = css`
  ${flex({ justify: "center", gap: "20px", align: "center" })}
  flex-direction: column;
  width: 100%;
`;

export const message = css`
  ${flex({ justify: "center", gap: "10px", align: "center" })}
  flex-direction: column;
  width: 100%;
`;

export const button = css`
  ${btn("light", "full")}
  align-self: center;
`;
