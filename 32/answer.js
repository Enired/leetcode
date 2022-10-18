/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  let currentCount = 0;
  let highest = 0;

  for(const char of s){
    console.log(char)
  }
  return highest
};

const s1 = "(()"
console.log(longestValidParentheses(s1));