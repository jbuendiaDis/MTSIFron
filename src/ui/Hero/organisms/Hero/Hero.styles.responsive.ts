import { css } from "@emotion/css";
import { forsize, text } from "@mixins";

export const hero = css`
${forsize({ size: "desktop-xbig", content: css`

` })}
${forsize({ size: "desktop-big", content: css`
    height: 920px;
` })}
${forsize({ size: "desktop-mid", content: css`
    justify-content: center;
    align-items: center;
    height: 870px;
` })}
${forsize({ size: "desktop", content: css`

` })}
${forsize({ size: "tablet-landscape", content: css`

` })}
${forsize({ size: "tablet-portrait", content: css`

` })}
${forsize({ size: "tablet-small", content: css`
justify-content: center;
    align-items: center;
    height: 800px;
` })}
${forsize({ size: "phone-xbig", content: css`
    height: 110vh;
` })}
${forsize({ size: "phone-big", content: css`

` })}
${forsize({ size: "phone-mid", content: css`

` })}
${forsize({ size: "phone", content: css`

` })}
`;

export const overlayone = css`
${forsize({ size: "desktop-xbig", content: css`

` })}
${forsize({ size: "desktop-big", content: css`
    width: 55%;
    height: 105%;
    left: -15%;
` })}
${forsize({ size: "desktop-mid", content: css`
    width: 55%;
    height: 100%;
    left: -15%;
` })}
${forsize({ size: "desktop", content: css`

` })}
${forsize({ size: "tablet-landscape", content: css`
    width: 70%;
    left: -30%;
` })}
${forsize({ size: "tablet-portrait", content: css`

` })}
${forsize({ size: "tablet-small", content: css`
    width: 88%;
    left: -40%;
` })}
${forsize({ size: "phone-xbig", content: css`
    width: 100%;
    height: 90%;
    left: -50%;
` })}
${forsize({ size: "phone-big", content: css`
    width: 560px;
    height: 89%;
    left: -80%;
` })}
${forsize({ size: "phone-mid", content: css`
    width: 560px;
    height: 89%;
    left: -100%;
` })}
${forsize({ size: "phone", content: css`

` })}
`;

export const overlaytwo = css`
${forsize({ size: "desktop-xbig", content: css`

` })}
${forsize({ size: "desktop-big", content: css`
    width: 45%;
    left: -15%;
    height: 100%;

` })}
${forsize({ size: "desktop-mid", content: css`
    width: 45%;
    left: -14%;
    height: 100%;

` })}
${forsize({ size: "desktop", content: css`

` })}
${forsize({ size: "tablet-landscape", content: css`
    width: 60%;
    left: -30%;
    height: 100%;
` })}
${forsize({ size: "tablet-portrait", content: css`

` })}
${forsize({ size: "tablet-small", content: css`

` })}
${forsize({ size: "phone-xbig", content: css`
    width: 80%;
    left: -45%;
    height: 90%;
` })}
${forsize({ size: "phone-big", content: css`
    width: 460px;
    height: 89%;
    left: -80%;
` })}
${forsize({ size: "phone-mid", content: css`
width: 360px;
    height: 90%;
    left: -65%;
` })}
${forsize({ size: "phone", content: css`

` })}
`;

export const heroContent = css`
${forsize({ size: "desktop-xbig", content: css`

` })}
${forsize({ size: "desktop-big", content: css`
    width: 90%;
    margin-left: 2%;
` })}
${forsize({ size: "desktop-mid", content: css`
    margin-top: 10%;
` })}
${forsize({ size: "desktop", content: css`

` })}
${forsize({ size: "tablet-landscape", content: css`

` })}
${forsize({ size: "tablet-portrait", content: css`

` })}
${forsize({ size: "tablet-small", content: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    gap: 30px;
` })}
${forsize({ size: "phone-xbig", content: css`

` })}
${forsize({ size: "phone-big", content: css`

` })}
${forsize({ size: "phone-mid", content: css`

` })}
${forsize({ size: "phone", content: css`

` })}
`;

export const leftTextStyles = css`
${forsize({ size: "desktop-xbig", content: css`

` })}
${forsize({ size: "desktop-big",
    content: css`
${text({ size: 14, height: 14.5, weight: 300 })}

` })}
${forsize({ size: "desktop-mid",
    content: css`
${text({ size: 12, height: 12.5, weight: 300 })}

` })}
${forsize({ size: "desktop",
    content: css`
${text({ size: 11, height: 11.5, weight: 300 })}

` })}
${forsize({ size: "tablet-landscape",
    content: css`
${text({ size: 10, height: 10.5, weight: 300 })}

` })}
${forsize({ size: "tablet-portrait",
    content: css`
${text({ size: 9, height: 9.5, weight: 300 })}

` })}
${forsize({ size: "tablet-small",
    content: css`
${text({ size: 8.5, height: 9, weight: 300 })}
text-align: center;
` })}
${forsize({ size: "phone-xbig",
    content: css`
${text({ size: 7, height: 7.5, weight: 300 })}

` })}
${forsize({ size: "phone-big",
    content: css`
${text({ size: 6, height: 7.5, weight: 300 })}
` })}
${forsize({ size: "phone-mid",
    content: css`
${text({ size: 5, height: 6.5, weight: 300 })}
` })}
${forsize({ size: "phone",
    content: css`
${text({ size: 4, height: 5.5, weight: 300 })}
` })}
`;

export const description = css`
${forsize({ size: "desktop-xbig", content: css`
    width: 68%;
` })}
${forsize({ size: "desktop-big", content: css`
` })}
${forsize({ size: "desktop-mid", content: css`

` })}
${forsize({ size: "desktop", content: css`
width: 76%;
` })}
${forsize({ size: "tablet-landscape", content: css`

` })}
${forsize({ size: "tablet-portrait", content: css`
width: 85%;
` })}
${forsize({ size: "tablet-small", content: css`
width: 95%;
` })}
${forsize({ size: "phone-xbig", content: css`
width: 100%;
` })}
${forsize({ size: "phone-big", content: css`

` })}
${forsize({ size: "phone-mid", content: css`

` })}
${forsize({ size: "phone", content: css`

` })}
`;
