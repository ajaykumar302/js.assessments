//Create examples to explain callback hell function	


var init = function () {
    var data1, data2, data3, data4;

    console.log('Start by waiting for a second...');

    window.setTimeout(function() {
        console.log('Then send a GET request to a couple of websites');

        $.get('https://cors-test.appspot.com/test', function (data) {
            data1 = data;

            $.get('https://cors-test.appspot.com/test', function (data) {
                data2 = data;

                $.get('https://cors-test.appspot.com/test', function (data) {
                    data3 = data;

                    $.get('https://cors-test.appspot.com/test', function (data) {
                        data4 = data;

                         console.log(data1);
                         console.log(data2);
                         console.log(data3);
                         console.log(data4);
                    });
                });
            });

        });

    }, 1000);
};

init();