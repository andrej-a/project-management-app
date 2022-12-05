export const deleteCookie = (value: string) => {
  document.cookie = `TASKBAN_USER_TOKEN=${value}; max-age=0`;
};
