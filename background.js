function setStartIcon() {
  chrome.browserAction.setIcon({ path: "start.png" });
}

function setStopIcon() {
  chrome.browserAction.setIcon({ path: "stop.png" });
}

function main(tabs.Tab tab){
}

chrome.browserAction.onClicked.addListener(main);