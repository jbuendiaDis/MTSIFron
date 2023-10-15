import { css } from "@emotion/css";
import { forsize, text } from "@mixins";

export const about = css`
${forsize({ size: "desktop-big", content: css`
    height: 110vh;
` })}
${forsize({ size: "tablet-small", content: css`
    height: 115vh;
` })}
`;

export const box = css`
${forsize({ size: "desktop", content: css`
    width: 90%;
    justify-content: center;
    align-items: center;
` })}
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
    justify-content: center;
    align-items: center;
` })}
`;

export const container = css`
${forsize({ size: "desktop-big", content: css`
    gap: 30px;
    padding: 50px;
` })}
${forsize({ size: "desktop", content: css`
    gap: 30px;
    padding: 50px;
    width: 100%;
` })}
${forsize({ size: "phone-xbig", content: css`
    gap: 30px;
    padding: 10px;
    width: 100%;
` })}
`;

export const title = css`
${forsize({ size: "desktop-mid", content: css`
    max-width: 25%;
` })}
${forsize({ size: "desktop", content: css`
    max-width: 35%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    max-width: 50%;
` })}
${forsize({ size: "phone-xbig", content: css`
    margin-top: 40px;
    max-width: 80%;
` })}

`;

export const subtitle = css`
${forsize({ size: "desktop-xbig",
    content: css`
${text({ size: 6.0, weight: 400, height: 7 })}
` })}
${forsize({ size: "desktop",
    content: css`
${text({ size: 5.0, weight: 400, height: 6 })}
width: 100%;
` })}
${forsize({ size: "tablet-portrait",
    content: css`
${text({ size: 3.5, weight: 400, height: 5 })}
    width: 100%;
` })}
${forsize({ size: "phone-big",
    content: css`
${text({ size: 3.0, weight: 400, height: 4 })}
` })}

`;
