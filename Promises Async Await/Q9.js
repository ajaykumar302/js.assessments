//Create examples to explain promise.all function
const functionOne = () => {
    console.log(`I am function one`);
}
const functionTwo = () => {
  return new Promise((res,rej)=>{
    setTimeout(() =>{
        res(`I am function Two`);
    },3000);
  })
    
}
const functionThree = () => {
    return `I am function three`;
}

const callAllFunction = async () => {
    let respOne = functionOne();
    console.log(respOne);

    let respTwo= await functionTwo();
    console.log(respTwo);

    let respThree = functionThree();
    console.log(respThree);
}
callAllFunction();