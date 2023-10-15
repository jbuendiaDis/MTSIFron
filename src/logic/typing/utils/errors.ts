import type { ObjStrCustom } from "../globals/types";

export type Errors = ObjStrCustom<string | null>;

export type ConfigErrors<T> = {
  error: unknown;
  errors: T;
  ns?: string;
};

export type ConfigError<T> = Omit<ConfigErrors<T>, "error"> & {
  error?: unknown;
  key: string;
};
