import operate from './operate';

const calculate = (data, buttonName) => {
  const operations = ['+', 'X', '-', '%', '÷'];
  const { total, next, operation } = data;
  let newTotal = total;
  let newNext = next;
  let newOperation = operation;

  if (buttonName === '+/-' && next) {
    newNext = -1 * next;
  } else if (buttonName === '+/-' && total && !next) {
    newTotal = -1 * total;
  } else if (buttonName === '.' && total && next === null) {
    newTotal = `${total}.`;
  } else if (buttonName === '.' && next) {
    newTotal = `${next}.`;
  } else if (buttonName === '.' && !total && !next) {
    newTotal = '0.';
  } else if (buttonName === 'AC') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '=' && operation && total && next) {
    newNext = null;
    newTotal = operate(total, next, operation);
    newOperation = null;
  } else if (operations.includes(buttonName)) {
    newNext = null;
    newOperation = buttonName;
    if (total && next && operation) {
      newTotal = operate(total, next, operation);
    } else if (next) {
      newTotal = next;
    }
  } else if (!next) {
    newTotal = total + buttonName;
  } else if (next) {
    newNext = next + buttonName;
  }
  return { operation: newOperation, total: newTotal, next: newNext };
};

export default calculate;
