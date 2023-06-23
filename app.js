const x = require('lodash');
let  arrGroup = [1,2,[9,[6,7],7],0];
const newArr = x.flattenDeep(arrGroup);
console.log(newArr)