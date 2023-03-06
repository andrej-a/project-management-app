export const setValueToLocalStorage = (names: string[], values: string[]) => {
  names.forEach((name, index) => {
    localStorage.setItem(name, values[index]);
  });
};
