import { css } from "@emotion/css";
import { forsize, text } from "@mixins";

export const operators = css`
${forsize({ size: "tablet-landscape", content: css`
    gap: 50px;
    padding: 10px;
` })}
${forsize({ size: "phone-big", content: css`
    gap: 50px;
    justify-content: space-around;
` })}
`;

export const containerLeft = css`
${forsize({ size: "phone-xbig", content: css`
    width: 100%;
    padding: 25px;
` })}
${forsize({ size: "phone-big", content: css`
    width: 100%;
    padding: 5px;
` })}
`;

export const dividerStyles = css`
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
` })}
`;

export const containerRight = css`
${forsize({ size: "desktop-mid", content: css`
    width: 70%;
` })}
${forsize({ size: "tablet-landscape", content: css`
    width: 80%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
    padding: 52px;
` })}
${forsize({ size: "phone-xbig", content: css`
    width: 100%;
    padding: 25px;
` })}
${forsize({ size: "phone-big", content: css`
    width: 100%;
    padding: 5px;
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

export const description = css`
${forsize({ size: "desktop-mid", content: css`
    max-width: 90%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    max-width: 100%;
` })}
${forsize({ size: "phone-big", content: css`
    max-width: 100%;
    padding: 5px;
` })}
`;
