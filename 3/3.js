// 3. Longest Substring Without Repeating Characters
// Medium

// 28840

// 1229

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
  let ans = 0; //The substring length
  let substring = '';
  for (const char of s) {
    if (!substring.includes(char)) {
      substring += char;
      if (ans < substring.length) {
      ans = substring.length;
      }
    }
    else {
      substring = substring.slice(substring.indexOf(char) + 1);
      substring += char;
    }
  }
  return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log('Answer should be abc with a length of 3\n');
console.log(lengthOfLongestSubstring('bbbbb'));
console.log('Answer should be b with a length of 1\n');
console.log(lengthOfLongestSubstring('pwwkew'));
console.log('Answer should be abc with a length of 3\n');
console.log(lengthOfLongestSubstring('dvdf'));
console.log('Answer should be vdf with a length of 3\n');