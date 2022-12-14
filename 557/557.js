////////////////////
//                //
// Task / Problem //
//                //
////////////////////

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.


// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"


// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.
///////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////
// Brute Force Solution //
//////////////////////////

const reverseWords = (str) => {
  const words = str.split(' ');
  const reversedWords = [];
  words.forEach(word => {
    let reversedWord = '';
    for(char of word){
      reversedWord = `${char}${reversedWord}`
    }
    reversedWords.push(reversedWord)
  });

  const newStr = reversedWords.join(' ')
  return newStr

};
////////////////
// Solution 2 //
////////////////

const newReverseWords = (str) => {
  let reverseStr = ''
  for(const char of str){
    reverseStr = `${char}${reverseStr}`
  }

  const reversedWords = reverseStr.split(' ').reverse().join(' ')
  return reversedWords
}

console.log('/////////////////')
console.log('// Problem 557 //')
console.log('/////////////////\n')

// Brute Force
console.log(reverseWords('Let\'s take LeetCode contest'));
console.log(reverseWords('God Ding'));

// Other Approach
console.log(newReverseWords('Let\'s take LeetCode contest'));
console.log(newReverseWords('God Ding'));

console.log('\n/////////////////')