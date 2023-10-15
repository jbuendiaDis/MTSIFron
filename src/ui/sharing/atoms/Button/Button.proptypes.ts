import type { ObjStrCustom } from "@typing/globals/types";

export interface Props {
  type: "submit" | "button" | "reset" | "label" | "link";
  text: string;
  config: {
    style: "normal" | "gradient" | "outline";
    size: "normal" | "big";
    text: "normal" | "uppercase" | "lowercase" | "capitalize";
  };
  datas: ObjStrCustom<string | number | boolean>;
}
