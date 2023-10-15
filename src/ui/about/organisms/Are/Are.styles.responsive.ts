import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const are = css`
${forsize({ size: "tablet-landscape", content: css`
    width: 70%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
` })}
`;
