export const deleteValueFromLocalStorage = (names: string[]) => {
  names.forEach((name) => {
    localStorage.removeItem(name);
  });
};
