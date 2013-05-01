function onMessage(request, sender, sendResponse) {
  sendResponse({});
}

chrome.extension.onMessage.addListener(onMessage);