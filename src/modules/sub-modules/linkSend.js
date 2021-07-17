var key = require('../../../key');
var fetch = require('node-fetch');

module.exports = (url, title) => {
    const whurl = key.LINK_WEBHOOK;
    const msg = {
    "username":"CodeChit",  
    "content":`**Title:** ${title}\n**URL:** ${url}`,
    "avatar_url": "https://i1.wp.com/www.codechit.com/wp-content/uploads/2020/11/cropped-20201121_085250_5892.jpg?fit=192%2C192&ssl=1"
    }
    fetch(
    whurl,
    {
        "method": "post",
        "headers": {
        "content-type": "application/json"
        },
        "body": JSON.stringify(msg).toString()
    }
    ).then(res => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.executeScript( tabs[0].id, {code:"console.log('link saved')"})
        });
    }).then(error => {
        console.log(error)
    }) 
}