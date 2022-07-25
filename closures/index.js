// //Question -1
//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());//1
// alert(counter());//2
// alert(counter());//3
// alert(counter());//4	


//Question -2

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged? //////1
//   }
//   console.log(count); // What is logged? /////0
// })();	

//Question -3

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged? // 3 times 3
//     }, 1000);
//   }	

//Question -4 
//Write a code to calculate area of a rectangle using inner function. 
//In this case outer function should accept parameter length and inner function should accept parameter breadth.	

// function outer(l){
//     function inner(b){
//         console.log(`Area of a rectangle ${l * b} Sqmts`);
//     }
//     inner(50);
// }
// outer(100);


//Question -5
//Take a variable in outer function and create an inner function to increase the counter every time it is called

// function outSide(){
//     let a=0;
//    return function inSide(){
//         a++;
//         console.log(a);
//     }
// }
// let b = outSide();
// b();//1
// b();//2
// b();//3
// b();//4

//Question -6

//"Print Output

// var a = 12;
// (function () {
//   alert(a);///////12
// })();


//Question -7
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);///////12
//   };
// })();
// x();	


//Question -8

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +//123
//         "innerArg = " + innerArg + "\n" +//456
//         "outerVar = " + outerVar + "\n" +//a
//         "innerVar = " + innerVar + "\n" +//b
//         "globalVar = " + globalVar);//xyz
    
//     })(456);//outerArg
// })(123);//innerArg
																									