function setStartIcon() {
  chrome.browserAction.setIcon({ path: "start.png" });
}

function setStopIcon() {
  chrome.browserAction.setIcon({ path: "stop.png" });
}

function main(tab){
  chrome.tabs.sendMessage(tab.id, {action: 'gotCommand', command: 'links'}, function(response) {
    //console.log(response.farewell);
  });
}

chrome.browserAction.onClicked.addListener(main);