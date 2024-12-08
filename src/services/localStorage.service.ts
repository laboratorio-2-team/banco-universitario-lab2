import { LocalStorage } from "@config/constants";

export function getJWT() {
  return localStorage.getItem(LocalStorage.JWT);
}

export function setJWT(value: string) {
  return localStorage.setItem(LocalStorage.JWT, value);
}

export function removeJWT() {
  return localStorage.removeItem(LocalStorage.JWT);
}
