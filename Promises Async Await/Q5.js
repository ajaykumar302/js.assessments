//Create examples to explain callback function																									


//The benefit of using a callback function is that you can wait for the 
//result of a previous function call and then execute another function call.

//ex -1
function myName(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
myName('kava', callMe);

// ex-2

let first = ()=>{
    console.log('first');
}
let second = ()=>{
    console.log('second');
}
let third = ()=>{
    console.log('third');
    second()
}
setTimeout(first,2000);
third();
