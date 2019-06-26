/**
 * Created by wangkai on 2019-06-26
 */

const scrollTo = (to, element) => {
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
    return;
  }
  element.timerId = null;
  const rate = 10;
  element.timerId = setInterval(() => {
    const perTick = (to - element.scrollLeft) / rate;
    // 正向考虑，perTick > 0
    if (Math.abs(to - element.scrollLeft) < rate) {
      clearInterval(element.timerId);
      element.timerId = null;
      element.scrollLeft = to;
      return;
    }
    element.scrollLeft = element.scrollLeft + perTick;
  }, 10);
};

export default scrollTo;
