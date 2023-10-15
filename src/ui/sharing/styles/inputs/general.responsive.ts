import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const area = css`
${forsize({ size: "tablet-small", content: css`
  padding: 15px;
` })}
${forsize({ size: "phone-xbig", content: css`
  padding: 10px;
` })}
`;
