const fs = require('fs');

const  firstfile= fs.readFileSync('./content/first.txt','utf-8');
const  Secondfile= fs.readFileSync('./content/second.txt','utf-8');
const  ThirdFile= fs.readFileSync('./content/third.txt','utf-8');

console.log(firstfile,Secondfile,ThirdFile);
fs.writeFileSync('./content/third.txt',`Hello From third String second time` , {flag:'a'});
