// Refactor following solution
// Replace substring with newstr
'use strict';
const Replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  } else {
    let = str;
    let = '';
    do {
      let _index = src.indexOf(substr);
      if (_index === -1) {
        return res + src;
      } else {
        const start = src.substring(0, _index);
        src = src.substring(_index + substr.length, src.length);
        res += start + newstr;
      }
    } while (true);
  }
};

module.exports = Replace;
