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
  if (buttonName === '.' && next) {
    total = `${total}.${next}`;
    return total;
  }
  if (buttonName === '.' && total === undefined && next === undefined) {
    total = '0';
    return total;
  }
  if (Number(buttonName)) {
    total += buttonName;
    return total;
  }
  const result = operate(total, next, operation);
  return result;
})();

export default calculate;
