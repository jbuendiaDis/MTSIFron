import { goto } from "$app/navigation";

export function toSignup() {
  return goto("/auth/signup");
}

export function toSignin() {
  return goto("/auth/signin");
}
