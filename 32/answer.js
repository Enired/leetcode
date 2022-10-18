/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  let currentCount = []
  let highest = 0;

  for(let i=0; i < s.length; i++){
    if(s[i] === '('){
      if(s[i+1] === ')'){
        currentCount.push(s[i])
        currentCount.push(s[i+1])
        highest = currentCount.length;
      }
    }
    else if(s[i] === ')'){
      if(s[i+1] !== '('){
        currentCount = [];
      }
    }
  }
  return highest
};

const s1 = "(()"
const s2 = ")()())"
const s3 = ""
console.log(longestValidParentheses(s3));