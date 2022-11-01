/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  const firstWord = strs[0]
  let prefix = '';


  for(let i = 0; i < firstWord.length; i++){
    if(!strs.every(e=>e[i] === firstWord[i])){
      return prefix
    }
    prefix += firstWord[i]
    
  }
  return prefix
};
const teststrs = ["dog","racecar","car"]
const teststrs2 = ["flower","flow","flight"]
console.log(longestCommonPrefix(teststrs))
console.log(longestCommonPrefix(teststrs2))
