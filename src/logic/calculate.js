import operate from './operate';

const calculate = (data, buttonName) => {
  const operations = ['+', 'x', '-', '÷', '%', '+/-'];
  const { total, next, operation } = data;
  let newTotal = total;
  let newNext = next;
  let newOperation = operation;
  if (buttonName === '+/-' && next) {
    newNext = operate(next, -1, 'x');
  } else if (buttonName === '+/-' && total === 'Error') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '+/-' && total && !next) {
    newTotal = operate(total, -1, 'x');
  } else if (buttonName === '%' && next) {
    newNext = operate(next, 100, '÷');
  } else if (buttonName === '%' && total === 'Error') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '%' && total && !next) {
    newTotal = operate(total, 100, '÷');
  } else if (buttonName === '%' && total === 'Error') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === 'AC') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '=' && total === 'Error') {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (buttonName === '=' && operation && total && next) {
    newNext = null;
    newTotal = operate(total, next, operation);
    newOperation = null;
  } else if (buttonName === '=' && !operation) {
    newNext = next;
    newTotal = total;
    newOperation = null;
  } else if (buttonName === '=' && total && operation && !next) {
    newTotal = operate(total, total, operation);
  } else if (buttonName === '=' && operation && !next) {
    newNext = null;
    newTotal = total;
    newOperation = operation;
  } else if (operations.includes(buttonName)) {
    newNext = null;
    newOperation = buttonName;
    if (total === 'Error') {
      newTotal = null;
      newNext = null;
      newOperation = null;
    } else if (total && next && operation) {
      newTotal = operate(total, next, operation);
    } else if (next) {
      newTotal = next;
    }
  } else if (total === 'Error' && buttonName) {
    newTotal = null;
    newNext = null;
    newOperation = null;
  } else if (next) {
    newNext = next + buttonName;
  } else {
    newNext = buttonName;
  }
  return { operation: newOperation, total: newTotal, next: newNext };
};

export default calculate;
