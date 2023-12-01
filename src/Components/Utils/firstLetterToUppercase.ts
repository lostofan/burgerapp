export const firstLetterToUpperCase = (string: string) => {
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
};
