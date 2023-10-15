import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const footer = css`
${forsize({ size: "desktop-mid", content: css`

` })}
`;

export const textStyles = css`
${forsize({ size: "phone-mid", content: css`
    font-size: 1.5rem;
` })}
`;

export const section = css`
${forsize({ size: "desktop-mid", content: css`
    width: 100%; 
    height: 100%;
    justify-content: flex-start;
    align-items: center;
` })}
`;

export const contentStyles = css`
${forsize({ size: "tablet-landscape", content: css`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
` })}
${forsize({ size: "phone-big", content: css`
    padding: 10px;
` })}
`;

export const contentCard = css`
${forsize({ size: "desktop-xbig", content: css`
    width: 45%;
` })}
${forsize({ size: "desktop-big", content: css`
    width: 46%;
` })}
${forsize({ size: "desktop-mid", content: css`
    width: 50%;
` })}
${forsize({ size: "desktop-mid", content: css`
    width: 90%;
` })}
${forsize({ size: "tablet-landscape", content: css`
    width: 40%;
` })}
${forsize({ size: "tablet-portrait", content: css`
    width: 100%;
` })}
${forsize({ size: "phone-big", content: css`
    width: 100%;
` })}
`;

export const legacyContent = css`
${forsize({ size: "desktop", content: css`
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 50px;
` })}
${forsize({ size: "tablet-landscape", content: css`
    justify-content: center;
    align-items: flex-end;
    padding-right: 50px;
` })}
${forsize({ size: "phone-big", content: css`
    justify-content: center;
    align-items: center;
    padding: 10px;
` })}
`;

export const bottomSectionStyle = css`
${forsize({ size: "tablet-landscape", content: css`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
` })}
${forsize({ size: "phone-big", content: css`
    width: 100%;
    justify-content: center;
    align-items: center;
` })}
`;
