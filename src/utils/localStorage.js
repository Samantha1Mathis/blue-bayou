const localStorageExists = () => {
  return !!window.localStorage;
};

export const readFromLocalStorage = (key) => {
  if (localStorageExists()) {
    const value = window.localStorage.getItem(key);
    return value;
  }
  return null;
};

export const writeToLocalStorage = (key, value) => {
  if (localStorageExists()) {
    window.localStorage.setItem(key, value);
  }
};

export const deleteFromLocalStorage = (key) => {
  if (localStorageExists()) {
    window.localStorage.removeItem(key);
  }
};
