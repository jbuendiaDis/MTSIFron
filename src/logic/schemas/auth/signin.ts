import { string, boolean } from "yup";

export const fieldsSignin = {
  user: string().required("required"),
  password: string().required("required"),
  remember: boolean(),
};
