//Question-2
//"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec,
// 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

const arr=[];
for (let i=1;i<8;i++){
    const promise= new Promise(function (res,rej){
      setTimeout(()=>{
        res(i)
    },1000*i);    
 })
arr.push(promise);  
}
for (let i=0;i<arr.length;i++){
arr[i].then(data=>{
  console.log(data);
}) 
}