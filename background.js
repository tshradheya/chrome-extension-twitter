// function sendTweet(status) {
//
//     console.log(status);
//     var object1 = {
//         status: status,
//     }
//
//     fetch('http://127.0.0.1:3000/postTweet', {
//     method: 'post',
//     body: JSON.stringify(object1),
//     headers: {
//         'Content-type': 'application/json',
//     }
// })
// };



// This function will eventually contain some logic
// for receiving background-color values from the
// current tab.
function getBgColors (tab) {
  // But for now, let's just make sure what we have so
  // far is working as expected.
  //alert('The browser action was clicked! Yay!');

  window.open('http://127.0.0.1:3000/login/twitter')
  // alert('I visited '+ document.location);
  // sendTweet('I just visited ' + document.location);
  //
  // document.addEventListener('keypress', function(e) {
  //     types += e.key;
  //
  //     if(timeOver) clearTimeout(timeOver);
  //     timeOver = setTimeout(() => {
  //         sendTweet('I just typed \"' + types + "\"");
  //         types = '';
  //     }, 10000);
  // }, false);
}

// When the browser action is clicked, call the
// getBgColors function.
chrome.browserAction.onClicked.addListener(getBgColors);
