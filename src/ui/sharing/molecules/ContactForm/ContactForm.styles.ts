import { css } from "@emotion/css";
import { flex, paragraph, btn } from "@mixins";

import * as responsive from "./ContactForm.styles.responsive";

export const contact = css`
  width: 100%;
`;

export const title = css`
	${paragraph()}
  color: var(--text-white);
  opacity: 0.8;

`;

export const form = css`
  ${flex({ justify: "flex-start", gap: "10px", align: "flex-start" })}
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  ${responsive.form}
`;

export const box = css`
  ${flex({ justify: "center", gap: "20px", align: "center" })}
  flex-direction: row;
  width: 100%;
  ${responsive.box}
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
