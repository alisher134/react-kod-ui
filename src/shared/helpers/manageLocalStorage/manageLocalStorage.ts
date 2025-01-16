export const setToLS = (key: string, value: unknown) => {
  const transformedValue = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, transformedValue);
};

export const getFromLS = (key: string) => {
  return localStorage.getItem(key);
};

export const removeFromLS = (key: string) => {
  localStorage.removeItem(key);
};
