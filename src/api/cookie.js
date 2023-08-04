import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (_name, value) => {
  return cookies.set(_name, value);
};

export const getCookie = _name => {
  return cookies.get(_name);
};
