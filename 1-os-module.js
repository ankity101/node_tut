
// const user = os.userInfo();
// console.log(user);  

//system uptime
const os =  require('os');

const currOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currOS);