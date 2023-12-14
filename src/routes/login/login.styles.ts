import { css } from "@emotion/css";

import { flex } from "@mixins";

export const listservices = css`
display: grid;
background-color: var(--bg-gray);
height: 20%;
width: 100%;
margin-top: -10em;
z-index: -5;
background-color: #253883;
border-bottom: 1px solid white;
min-height: 100vh;
`;

export const container = css`
  ${flex({ justify: "center", align: "center", gap: "10px" })}
  width: 100%;
  height: 100%;
  padding: 80px;
  flex-direction: column;
`;
