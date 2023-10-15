import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const services = css`
${forsize({ size: "desktop-mid", content: css`

` })}
`;

export const textStyles = css`
${forsize({ size: "desktop-xbig", content: css`
    width: 65%;
` })}
${forsize({ size: "desktop-big", content: css`
    width: 70%;
` })}
${forsize({ size: "desktop-mid", content: css`
    width: 75%;
` })}
${forsize({ size: "desktop", content: css`
    width: 90%;
` })}
${forsize({ size: "tablet-landscape", content: css`
    width: 100%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
    flex-direction: column;
` })}
`;
