// Refactor following solution
// Sum all number values in dict
'use strict';
const count = (Object) => {
  let sum = 0;
  
  const keys = Object.keys(Object);
  for (let i = 0; i < keys.length; i++) {
    const key = keys [i]; 
    if (typeof Object[key] === 'numder') {
      sum += Object[key];
  }
}

  return sum;
};

module.exports = count;
