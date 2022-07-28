//Create examples to explain promises function	

//when we call an API ,we wrap it into promise .if server is running or API is fine,then it will return success.
//if the API is invalid,then it will return an error.
//promise is always binded to a condition behind it.

function MyPromise() {
    const response = new Promise(function (fullfilled, rejected) {//pendingg state
        $.ajax({
            url: 'https://fakestoreapi.com/products',
            type: 'GET',
            success: function (data) {
              fullfilled(data);//success state
            },
            error:function(err){
              rejected(err);//failure state
        
            }
        });
    })
    return response;
  }
  $('#btn').click(function () {
    MyPromise()
       .then(function (data) {
         console.log('success is -',data);
       })
       .catch(function (err) {
         console.log('error is -',err);
       });
   });
 