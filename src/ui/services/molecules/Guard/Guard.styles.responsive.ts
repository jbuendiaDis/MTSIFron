import { css } from "@emotion/css";
import { forsize, text } from "@mixins";

export const guard = css`
${forsize({ size: "desktop", content: css`
    height: 100%;
` })}
${forsize({ size: "phone-xbig", content: css`
    height: 100%;
    padding: 10px;
` })}
`;

export const dividerStyles = css`
${forsize({ size: "desktop", content: css`
    width: 95%;
` })}
`;

export const imageStyles = css`
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
` })}
`;

export const title = css`
${forsize({ size: "desktop-xbig",
    content: css`
${text({ size: 7.0, weight: 400, height: 7 })}
` })}
${forsize({ size: "desktop",
    content: css`
${text({ size: 5.0, weight: 400, height: 6 })}
` })}
${forsize({ size: "tablet-portrait",
    content: css`
${text({ size: 4.0, weight: 400, height: 5 })}
` })}
${forsize({ size: "phone-big",
    content: css`
${text({ size: 3.0, weight: 400, height: 4 })}
` })}

`;
