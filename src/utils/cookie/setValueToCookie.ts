export const setValueToCookie = (value: string) => {
  document.cookie = `TASKBAN_USER_TOKEN=${value}; max-age=${3600 * 12}`;
};
