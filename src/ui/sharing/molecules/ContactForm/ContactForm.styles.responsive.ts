import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const container = css`
${forsize({ size: "desktop", content: css`
  padding: 50px 35px;
` })}
`;

export const title = css`
${forsize({ size: "desktop-mid", content: css`
  font-size: 2.2rem;
  line-height: 4.8rem;
` })}
${forsize({ size: "desktop", content: css`
  margin-top: 25px;
  font-size: 3.8rem;
  line-height: 4.4rem;
` })}
${forsize({ size: "tablet-landscape", content: css`
  margin-bottom: 35px;
  font-size: 3.6rem;
  line-height: 4.2rem;
` })}
${forsize({ size: "tablet-portrait", content: css`
  margin-bottom: 25px;
  font-size: 3.4rem;
  line-height: 4rem;
` })}
${forsize({ size: "tablet-small", content: css`
  font-size: 3.2rem;
  line-height: 3.8rem;
` })}
${forsize({ size: "phone-xbig", content: css`
  font-size: 3rem;
  line-height: 3.6rem;
` })}
${forsize({ size: "phone-big", content: css`
  font-size: 2.8rem;
  line-height: 3.4rem;
` })}
${forsize({ size: "phone-mid", content: css`
  font-size: 2.6rem;
  line-height: 3.2rem;
` })}
`;

export const form = css`
${forsize({ size: "desktop", content: css`
` })}
`;

export const box = css`
${forsize({ size: "desktop", content: css`
  flex-direction: column;
  gap: 10px;
` })}
`;
