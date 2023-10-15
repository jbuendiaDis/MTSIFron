import { string } from "yup";

export const fieldsForgot = {
  email: string().required("required"),
};
