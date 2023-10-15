import { css } from "@emotion/css";
import { forsize } from "@mixins";

export const listservices = css`
${forsize({ size: "tablet-portrait", content: css`
    height: 100%;
    width: 100%;
    padding: 10px;
` })}
${forsize({ size: "phone-big", content: css`
    height: 100%;
    width: 100%;
    padding: 5px;
` })}
`;

export const container = css`
${forsize({ size: "desktop-mid", content: css`
    flex-direction: column;
` })}
${forsize({ size: "desktop", content: css`
    flex-direction: column;
    padding: 50px;
` })}
${forsize({ size: "tablet-portrait", content: css`
    flex-direction: column;
    padding-top: 50px;
` })}
${forsize({ size: "tablet-small", content: css`
    flex-direction: column;
    padding-top: 80px;
` })}
${forsize({ size: "phone-xbig", content: css`
    flex-direction: column;
    padding-top: 100px;
` })}
${forsize({ size: "phone-big", content: css`
    flex-direction: column;
    padding-top: 100px;
    width: 100%;
    max-width: 100%;
    padding-top: 30%;
` })}
`;

export const boxSection = css`
${forsize({ size: "desktop-mid", content: css`
  border-bottom: 1px solid rgba(1, 28, 77, 1);
  border-right: 0px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10%;
` })}
${forsize({ size: "phone-big", content: css`
    width: 100%;
    max-width: 100%;
` })}
`;

export const boxLists = css`
${forsize({ size: "desktop", content: css`
    padding: 10px;
` })}
${forsize({ size: "phone-xbig", content: css`
    padding: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
` })}
`;

export const descriptionOne = css`
${forsize({ size: "tablet-portrait", content: css`
    height: 100%;
    width: 100%;
    padding: 10px;
    max-width: 95%;
` })}
${forsize({ size: "phone-big", content: css`
    height: 100%;
    width: 100%;
    padding: 5px;
    max-width: 100%;

` })}
`;

export const image = css`
${forsize({ size: "desktop", content: css`
  width: 80%;
  height: 80%;
` })}
${forsize({ size: "tablet-landscape", content: css`
  width: 70%;
  height: 70%;
` })}
${forsize({ size: "tablet-portrait", content: css`
  width: 60%;
  height: 60%;
` })}
${forsize({ size: "tablet-small", content: css`
  width: 80%;
  height: 80%;
` })}
${forsize({ size: "phone-big", content: css`
  width: 100%;
  height: 100%;
` })}
`;

export const box = css`
${forsize({ size: "desktop-big", content: css`
    height: 100%;
    width: 100%;
    padding: 10px;
    max-width: 40%;
` })}
${forsize({ size: "desktop-mid", content: css`
    height: 100%;
    width: 100%;
    padding: 10px;
    max-width: 20%;
` })}
${forsize({ size: "tablet-small", content: css`
    height: 100%;
    width: 100%;
    padding: 10px;
    max-width: 90%;
` })}
${forsize({ size: "phone-big", content: css`
    height: 100%;
    width: 100%;
    padding: 5px;
    max-width: 100%;
` })}
`;
