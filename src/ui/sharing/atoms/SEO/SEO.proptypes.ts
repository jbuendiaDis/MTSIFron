import type { ObjStrCustom } from "@typing/globals/types";

export interface Props {
  title: string | null;
  description: string;
  metas: ObjStrCustom<string>[];
  metaid: string;
  home: boolean;
}
