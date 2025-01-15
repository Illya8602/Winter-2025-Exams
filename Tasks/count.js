// Refactor following solution
// Sum all number values in dict
'use strict';
const count = (Object) => {
  let sum = 0;
  
  const keys = Object.keys(Object);
  keys.forEach((key) => {
    
    const value = Object[key];
    if (typeof value === 'number') sum += value;
  });

  return sum;
};

module.exports = count;
