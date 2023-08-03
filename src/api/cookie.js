import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = _name => {
  return cookies.set(_name, value, { ...options });
};

export const getCookie = _name => {
  return cookies.get(_name);
};
