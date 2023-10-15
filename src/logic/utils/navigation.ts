import { page } from "$app/stores";

// eslint-disable-next-line import/order
import type { ObjStrCustom } from "@typing/globals/types";

export function QueryParams() {
  let params: ObjStrCustom<string> = {};
  page.subscribe(({ url }) => {
    params = Object.fromEntries(url.searchParams.entries());
  });

  return params;
}
