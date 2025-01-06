import Cookies from 'js-cookie';

export const getFromCookie = (key: string) => {
  return Cookies.get(key);
};

export const saveToCookie = (key: string, value: string) => {
  Cookies.set(key, value);
};

export const removeFromCookie = (key: string) => {
  Cookies.remove(key);
};
