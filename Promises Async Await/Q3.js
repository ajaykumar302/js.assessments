//"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec,
// 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"																									

let num =new Promise((kava,reject)=>{
     
    setTimeout(()=>{
        kava(console.log("1"))
    },1000)
   
}).then( ()=> new Promise((kava,reject)=>{

   setTimeout(()=>{
    kava(console.log("2"))
   },2000)

}) ).then( ()=> new Promise((kava,reject)=>{

   setTimeout(()=>{
    kava(console.log("3"))
   },3000)

}) ).then(()=> new Promise((kava,reject)=>{
   
    setTimeout(()=>{
        kava(console.log("4"))
    },4000)

})).then(()=> new Promise((kava,reject)=>{
   
    setTimeout(()=>{
        kava(console.log("5"))
    },5000)
})).then( ()=> new Promise((kava,rej)=>{
   
    setTimeout(()=>{
        kava(console.log("6"))
    },6000)

})).then(()=> new Promise((kava,rej)=>{
    
    setTimeout(()=>{
        kava(console.log("7"))
        console.log("end of promises");
    },7000)
}));