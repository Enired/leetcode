const strStr = (haystack, needle) => {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1
};

console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('derineiscool', 'cool'))
console.log(strStr('thisisatest', 'test'))
console.log(strStr('iliketoplayvideogames', 'video'))