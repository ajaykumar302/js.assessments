//Create examples to explain async await function																									

/// Async/Await - They are used to handle promise more efficiently . the word async before a function always
// means that the function always returns a promise . so, we therefore use async before the function name to return a
//promise instead of a value.
// Await is used to wait for the result that is to be returned from the promise. so, we use await when we are
// calling a function which returen a promise. also we can use them(Async/Await) for making API calls.

async function tryingPromises(){
  console.log(`I am inside the function using async/await`);
  const response = await fetch ("https://api.github.com/users");
  console.log("before the response is fetched");
  const users = await response.json();
  console.log("Users resolved");

  return users;
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("After calling the function");
console.log("data received", data);
data.then((res)=>{
  console.log(res);
})
console.log("End of Code");