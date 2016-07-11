'use strict';

let twoSum = (arr, S) => {
  let hash = {};
  let result = [];
  for (let elem of arr) {
    hash[elem] = true;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (hash[S - arr[i]]) {
      result.push([arr[i], S - arr[i]]);
      arr.splice(i, 1);
    }
  }
  return result;
}

module.exports = twoSum;