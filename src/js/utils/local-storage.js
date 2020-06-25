export const setUserLocalStorage = (user) => {
  return window.localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem("user"));
};

export const clearUserLocalStorage = () => {
  window.localStorage.removeItem("user");
};
