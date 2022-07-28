//Question-1///Write one example explaining how you can write a callback function ?	
//#Callback: A callback is a function that is passed as an argument to another function that executes
//            the callback based on the result. They are basically functions that are executed only after a result is produced.
//            Callbacks are an important part of  asynchronous JavaScript.

function element(ab){//ab=call back function
    console.log('i am function element()');
    ab(2,3);//calling elementTwo() function as an callback function
}

function elementTwo(c,d){
    console.log('i am callback function elementTwo()');
    console.log(` and the addition of ${c} and ${d} is ${c + d}`);
}
// element(elementTwo);//just called the element func by passing an another function as an argument called callback function
