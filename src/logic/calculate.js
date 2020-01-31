import operate from './operate';

const calculate = ((data, buttonName) => {
  let { total, next, operation } = data;
  if (buttonName === '+/-') {
    total = -total;
    next = -next;
    operation = buttonName;
    return total;
  }
  if (buttonName === 'AC') {
    total = '0';
    next = '0';
    operation = null;
    return total;
  }
  if (buttonName === '.' && total && next === null) {
    total += '.';
    return total;
  }
  if (buttonName === '.' && next) {
    next += '.';
    return next;
  }
  if (buttonName === '.' && !total && !next) {
    total = '0';
    return total;
  }
  if (Number(buttonName) && !next) {
    total += buttonName;
    return total;
  }
  if (Number(buttonName) && next) {
    next += buttonName;
    return next;
  }
  const result = operate(total, next, operation);
  return result;
})();

export default calculate;
