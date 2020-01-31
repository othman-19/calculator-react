import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  try {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    if (operation === '+') {
      return num1.plus(num2).toString();
    }
    if (operation === '-') {
      return num1.minus(num2).toString();
    }
    if (operation === 'x') {
      return num1.times(num2).toString();
    }
    if (operation === '%') {
      return num1.div(100).toString();
    }
    if (operation === '÷' && (num2) !== 0) {
      return num1.div(num2).toString();
    }
  } catch (e) {
    return 'Error';
  }
  return null;
};

export default operate;
