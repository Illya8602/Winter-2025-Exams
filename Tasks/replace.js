// Refactor following solution
// Replace substring with newstr
'use strict';
const replace = (str, substr, newstr) => {
  if (substr === '') return str;
  let temp = str;
  let res = '';
  let index = temp.indexOf(substr);

  while (index !== -1) {
    const start = temp.substring(0, index);
    temp = temp.substring(index + substr.length, temp.length);
    res += start + newstr;
    index = temp.indexOf(substr);
    res += temp;
  }
  return res;
};

module.exports = replace;
