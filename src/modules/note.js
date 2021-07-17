const noteSend = require('./sub-modules/noteSend');

module.exports = () => {
    let contexts = [
        {
            context:"image",
            title: "Capture"
        },
        { 
            context:"selection",
            title: "Ledger"
        }
    ]
    contexts.forEach(function(context) {
        chrome.contextMenus.create({
            id: `LS #${context.context}`,
            title: context.title,
            contexts:[context.context]
        });
    })
    
    
    chrome.contextMenus.onClicked.addListener(function myFunction(response) {    
        if(response.menuItemId === "LS #selection") {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                let note = {
                    type: 'text',
                    title: tabs[0].title,
                    content: response.selectionText,
                }
                noteSend(note);
            });
        } else if (response.menuItemId === 'LS #image') {
            let note = {
                type: 'image',
                imageUrl: response.srcUrl
            }
            noteSend(note);
        }
    });
}