const commands = require('./modules/commands');
const note = require('./modules/note')

// Reciving Message: From Content
chrome.runtime.onMessage.addListener(function(request) {
  if(request.message==='contentCall') {
    console.log("content -> Backround")
  }
})

commands();
note();