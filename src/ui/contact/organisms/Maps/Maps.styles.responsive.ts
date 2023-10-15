import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const maps = css`
${forsize({ size: "desktop-mid", content: css`

` })}
`;

export const textStyles = css`
${forsize({ size: "phone-mid", content: css`
    font-size: 1.5rem;
` })}
`;
