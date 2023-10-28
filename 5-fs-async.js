const {readFile,writeFile} = require('fs');
 console.log('Start');
 readFile('./content/first.txt','utf-8' , (err,result) =>{
    if(err){
        console.log(err)
        return ;
    }
    const res1 = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const res2=result
        writeFile('./content/result.txt',`Here is the result ${res1} and ${res2}`,(err,result)=>{
          if(err){
            console.log(err);
            return;
          }
          console.log(result);
          console.log('Done With This Task');
        })

    })
})
console.log('Starting Next ');