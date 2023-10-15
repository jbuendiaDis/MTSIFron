/* eslint-disable max-classes-per-file */
import { ValidationError } from "yup";
import { throwError } from "@ptmx/http";

import type { Writable } from "svelte/store";
import type { ConfigError, ConfigErrors, Errors } from "@typing/utils/errors";

export function showErrors<T>({ error, errors, ns = "errors" }: ConfigErrors<T>) {
  if (!(error instanceof ValidationError)) {
    throwError(error);
  }
  if (error instanceof ValidationError) {
    return error.inner.reduce((acc, err) => ({
      ...acc,
      [`${err.path}`]: `${ns}:${err.message.includes("`number` type") ? "type-number" : err.message}`,
    }), { ...errors });
  }
  return errors;
}

export function setErrors<T extends Errors = Errors>({ error, errors, ns = "errors" }: ConfigErrors<Writable<T>>) {
  errors.update((prevErrors) => {
    const resetErrors = Object.keys(prevErrors).reduce((acc, key) => ({
      ...acc,
      [key]: null,
    }), prevErrors);
    const newErrors = showErrors({ error, errors: resetErrors, ns });

    return newErrors;
  });
}

export function setError<T extends Errors = Errors>({ error, errors, key, ns = "errors" }: ConfigError<Writable<T>>) {
  let message: string | null = null;

  if (error instanceof ValidationError) {
    message = error.inner.reduce((_, err) => (
      `${ns}:${err.message.includes("`number` type") ? "type-number" : err.message}`
    ), "");
  }
  errors.update((prevErrors) => ({
    ...prevErrors,
    [key]: message,
  }));
}
