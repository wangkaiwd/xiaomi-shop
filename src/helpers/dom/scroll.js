/**
 * Created by wangkai on 2019-06-26
 */

/**
 * @description 元素滚动动画
 * @param {number} to
 * @param {Vue | Element | Vue[] | Element[]|HTMLElement} element
 * @param {number} maxScrollLeft
 * @param {Object} operator
 */
const scrollTo = (to, element, maxScrollLeft, operator) => {
  const clearTimer = () => {
    clearInterval(operator.timerId);
    operator.timerId = null;
  };
  if (operator.timerId) {
    return clearTimer();
  }
  operator.timerId = null;
  const rate = 10;
  const { left, width } = operator.getBoundingClientRect();
  const distance = left - element.offsetWidth / 2 + width / 2;
  operator.timerId = setInterval(() => {
    const perTick = (to - element.scrollLeft) / rate;
    if (distance <= 0 && element.scrollLeft <= 0) {
      element.scrollLeft = 0;
      return clearTimer();
    }
    if (distance >= 0 && element.scrollLeft >= maxScrollLeft) {
      element.scrollLeft = maxScrollLeft;
      return clearTimer();
    }
    if (Math.abs(perTick) < rate) {
      clearTimer();
      element.scrollLeft = to;
      return;
    }
    console.log('perTick', perTick);
    element.scrollLeft = element.scrollLeft + perTick;
  }, 10);
};

export default scrollTo;
