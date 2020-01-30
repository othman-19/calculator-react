import Big from 'big';

const operate = ((numberOne, numberTwo, operation) => {
  try {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    if (operation === '+') {
      return Big(num1).plus(Big(num2)).toString();
    }
    if (operation === '-') {
      return Big(num1).minus(Big(num2)).toString();
    }
    if (operation === '*') {
      return Big(num1).times(Big(num2)).toString();
    }
    if (operation === '%') {
      return Big(num1).div(100).toString();
    }
    if (operation === '/' && num2 !== 0) {
      return Big(num1).div(Big(num2)).toString();
    }
  } catch (e) {
    return 'Error!';
  }
  return 'Error';
})();

export default operate;
