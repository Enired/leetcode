/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let revNum = x.toString().split('').reverse().join('');
  if (parseInt(revNum) !== x) {
    return false;
  }

  return true;
};

const num1 = 121;
const num2 = -121;
const num3 = 10;

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));