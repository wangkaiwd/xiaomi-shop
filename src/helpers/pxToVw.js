export const vw = (number) => {
  const htmlWidth = document.documentElement.offsetWidth;
  return number * (100 / htmlWidth);
};
