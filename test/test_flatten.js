let array=[1, [2], [3, [[4]]]];
let flatten=require("../flatten.js");

function cb(row) {
    let flattened = [];
    for (let i = 0; i < row.length; i++) {
      if (Array.isArray(row[i])) {
        const nestedArray = cb(row[i]);
        for (let j = 0; j < nestedArray.length; j++) {
          flattened.push(nestedArray[j]);
        }
      } else {
        flattened.push(row[i]);
      }
    }
    return flattened;
  }

let output=flatten(array,cb);
console.log(output);