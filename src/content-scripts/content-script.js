// Recieving Message: From Background
chrome.runtime.onMessage.addListener(function(request) {
    if(request.message === "backgroundCall"){
        console.log('Backgrground -> Content')
    }
});


// Sending Message: Content --> Background
chrome.runtime.sendMessage({message: "contentCall"});  