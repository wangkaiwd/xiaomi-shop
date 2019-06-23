import regConfig from './regConfig';

const isEmpty = (value) => {
  return value === '' || value === null || value === undefined;
};
const addError = (errors, key, message) => {
  if (!errors[key]) {
    errors[key] = [];
  }
  errors[key].push(message);
};
const regExpList = {
  phone: regConfig.mobile,
  email: regConfig.email,
  bankCard: regConfig.bankCard
};
export const noError = (errors) => {
  return Object.keys(errors).length <= 0;
};
const validator = (data, constraints, isOnlyOne) => {
  const errors = {};
  for (let i = 0; i < constraints.length; i++) {
    const { key, required, minLength, maxLength, pattern, message } = constraints[i];
    if (isOnlyOne && !noError(errors)) {
      return errors;
    }
    if (required && isEmpty(data[key])) {
      addError(errors, key, message);
    }
    if (minLength && data[key] < minLength) {
      addError(errors, key, message);
    }
    if (maxLength && data[key] > maxLength) {
      addError(errors, key, message);
    }
    if (pattern) {
      const builtInReg = regExpList[pattern];
      if (builtInReg) {
        if (!builtInReg.test(data[key])) {
          // 这里不能直接将errors[key]作为参数传入，当errors[key]是undefined的时候，
          // 传入的是简单数据类型，并不能公用同一个内存空间
          addError(errors, key, message);
        }
      } else if (!pattern.test(data[key])) {
        addError(errors, key, message);
      }
    }
  }
  return errors;
};
export default validator;
