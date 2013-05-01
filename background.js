function setStartIcon() {
  chrome.browserAction.setIcon({ path: "start.png" });
}

function setStopIcon() {
  chrome.browserAction.setIcon({ path: "stop.png" });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {action: 'startRec'}, function(response) {
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  action = {recognized: function () {
    alert('get script: ' + request.transcript);
    chrome.tabs.sendMessage(sender.tab.id, {action: 'gotCommand', command: request.transcript}, function (response) {
    });
  }};
  action[request.action]();
});
