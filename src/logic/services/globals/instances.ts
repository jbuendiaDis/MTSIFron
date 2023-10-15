import { Http } from "@ptmx/http";

import config from "@config";

export const registry = Http.create(config.registry_url, {
  params: {
    key: config.registry_key,
  },
});
