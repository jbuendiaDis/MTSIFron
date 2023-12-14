import { string } from "yup";
import { REGEX_PHONE } from "@utils/regex";

export const fields = {
  name: string().required("required"),
  email: string().email("required-email").required("required"),
  phone: string().matches(REGEX_PHONE, "required-phone").required("required"),
  message: string(),
};

export const DEFAULT_MESSAGE_VALUES = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const login = {
  clientCode: string().required("required"),
  password: string().required("required"),
  email: string().email("required-email").required("required"),
};
