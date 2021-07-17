const linkSend = require('./sub-modules/linkSend')

module.exports = () => {
    chrome.commands.onCommand.addListener((command) => {
        console.log('command fire')
        // Command: Ctrl + Shift + L to save link
        if(command === 'saveLink') {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                linkSend(tabs[0].url, tabs[0].title);
            });
        }
    });
}

