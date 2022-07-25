//Write a function that accepts parameter n and returns factorial of n
let factorial = (n) => {
    let fact = 1;
    for(let i=2;i<=n;i++){
        if(n===0){
            fact =1;
            break;
        }
        fact = fact * i;
    }
    console.log(`The factorial of the ${n} is : ${fact}`);
}
factorial(10)