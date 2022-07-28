//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved
// state and print Promise Resolved, and if nothing is passed then it should go to reject state and 
//catch the error and print Promise Rejected 																									


function promise(condition){
    let con = new Promise(function(resolve,reject){
        (condition == 'yes')? resolve('Promise Resolved') : reject('Promise Rejected'); 
    })
    return con;
}
promise('yes')
.then(data => console.log(data)).catch(err=>console.log(err));