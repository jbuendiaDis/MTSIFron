import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const header = css`
${forsize({ size: "tablet-landscape", content: css`
  padding: 25px 30px;
` })}
${forsize({ size: "tablet-small", content: css`
  padding: 20px 25px;
` })}
${forsize({ size: "phone-xbig", content: css`
  padding: 15px 20px;
` })}
`;

export const logo_link = css`
${forsize({ size: "tablet-landscape", content: css`
  max-width: 200px;
` })}
${forsize({ size: "tablet-portrait", content: css`
  max-width: 150px;
` })}
${forsize({ size: "tablet-small", content: css`
  max-width: 130px;
` })}
${forsize({ size: "phone-xbig", content: css`
  max-width: 110px;
` })}
`;

export const logo = css`
${forsize({ size: "tablet-small", content: css`
  height: 40px;
` })}
${forsize({ size: "phone-xbig", content: css`
  height: 30px;
` })}
`;

export const nav = css`
${forsize({ size: "desktop-mid", content: css`
  gap: 30px;
` })}
${forsize({ size: "tablet-landscape", content: css`
  gap: 20px;
  justify-content: flex-end;
` })}
`;

export const list = css`
${forsize({ size: "desktop-mid", content: css`
  padding: 0;
  gap: 30px;
` })}
${forsize({ size: "desktop", content: css`
  gap: 10px;
  padding: 0;
` })}
`;
