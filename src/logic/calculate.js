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
    total = 0;
    return total;
  }
  if (buttonName === '.' && next !== false) {
    total = `${total}.${next}`;
    return total;
  }
  const result = operate(total, next, operation);
  return result;
})();

export default calculate;
