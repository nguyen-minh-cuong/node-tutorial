const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first-text.txt','utf8');
const second = readFileSync('./content/second-text.txt','utf8');
writeFileSync('./content/third-text.txt','third');

console.log(first);
console.log(second);