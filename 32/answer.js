/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  const stack = [-1];
  let maxlength = 0;

  for(let i = 0; i < s.length; i++){
    let newMaxLength = 0;
    if(s[i]=== '('){
      stack.push(i);
    }
    else if(s[i]===')'){
      stack.pop()
      if(stack.length === 0){
        stack.push(i);
      }
      else{
        newMaxLength = i - stack[stack.length-1];
        if(newMaxLength >= maxlength){
          maxlength = newMaxLength;
        }

      }
    }
  }

  return maxlength

};

const s1 = "(()"
const s2 = ")()())"
const s3 = ""
const s4 = "()(())"
const s5 = "(()))())("
console.log(longestValidParentheses(s1));