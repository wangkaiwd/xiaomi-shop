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
const validator = (data, constraints) => {
  const keys = Object.keys(constraints);
  const errors = {};
  keys.map(key => {
    const value = constraints[key];
    value.map(rule => {
      const { required, minLength, maxLength, message, pattern } = rule;
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
        if (builtInReg && !builtInReg.test(data[key])) {
          // 这里不能直接将errors[key]作为参数传入，当errors[key]是undefined的时候，
          // 传入的是简单数据类型，并不能公用同一个内存空间
          addError(errors, key, message);
        } else if (!pattern.test(data[key])) {
          addError(errors, key, message);
        }
      }
    });
  });
  return errors;
};
export default validator;
