/**
 * Created by wangkai on 2019-06-26
 */

/**
 * @description 子元素滚动到父元素中间
 * @param {Vue | Element | Vue[] | Element[]|HTMLElement} element
 * @param {Object} operateChild
 */
const scrollToMiddle = (element, operateChild) => {
  const clearTimer = () => {
    clearInterval(operateChild.timerId);
    operateChild.timerId = null;
  };
  const getMaxScrollLeft = () => {
    let sum = 0;
    for (let j = 0; j < element.children.length; j++) {
      sum += element.children[j].offsetWidth;
    }
    return sum - element.offsetWidth;
  };
  if (operateChild.timerId) {return clearTimer();}
  operateChild.timerId = null;
  const maxScrollLeft = getMaxScrollLeft();
  const rate = 10;
  const { left, width } = operateChild.getBoundingClientRect();
  const distance = left - element.offsetWidth / 2 + width / 2;
  const to = distance + element.scrollLeft;
  operateChild.timerId = setInterval(() => {
    const perTick = (to - element.scrollLeft) / rate;
    if (distance <= 0 && element.scrollLeft <= 0) {
      element.scrollLeft = 0;
      return clearTimer();
    }
    if (distance >= 0 && element.scrollLeft >= maxScrollLeft) {
      element.scrollLeft = maxScrollLeft;
      return clearTimer();
    }
    if (Math.abs(perTick) < 1) {
      clearTimer();
      element.scrollLeft = to;
      return;
    }
    element.scrollLeft = element.scrollLeft + perTick;
  }, 10);
};

export default scrollToMiddle;
