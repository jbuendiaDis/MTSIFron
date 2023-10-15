import { boolean, string } from "yup";
import { REGEX_PHONE, REGEX_PASSWORD } from "@utils/regex";

export const fieldsSignup = {
  firstName: string().min(2).max(40).required("required"),
  lastName: string().min(2).max(40).required("required"),
  country: string().required("required"),
  email: string().email("required-email").required("required"),
  phone: string().matches(REGEX_PHONE, "required-phone").required("required"),
  phoneCode: string().required("required"),
  password: string().matches(REGEX_PASSWORD, "required-pass").required("required"),
  confirmPassword: string().matches(REGEX_PASSWORD, "required-pass").required("required"),
  terms: boolean().oneOf([true], "required-terms").required("required"),
};
