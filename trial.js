
function sendTweet(status) {
    console.log(status);
    var object1 = {
        status: 'hello',
    }
    var data = new FormData();
      data.append("json", JSON.stringify(object1));

      fetch('http://127.0.0.1:3000/postTweet', {
        method: 'POST',
        body: data
      })
    };


var types = '';
var timeOver;


console.log('I visited'+ document.location);
alert('I visited'+ document.location);
sendTweet('I visited' + document.location);

document.addEventListener('keypress', function(e) {
        types += e.key;

        if(timeOver) clearTimeout(timeOver);
        timeOver = setTimeout(() => {
            alert(types);
            types = '';
        }, 500);
}, false);
