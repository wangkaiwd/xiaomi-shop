/**
 * 将px 转换为 vw
 *
 * @param {number}
 * @returns {number}
 */
export const vw = (number) => {
  const htmlWidth = document.documentElement.offsetWidth;
  return number * (100 / htmlWidth);
};
