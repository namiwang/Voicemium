function showMessageDiv(){
  var div = document.createElement("div");
  div.setAttribute("id", "voicemium-message");
  $("body").prepend(div);
}

function onMessage(request, sender, sendResponse) {
  showMessageDiv();
  sendResponse({});
}

chrome.runtime.onMessage.addListener(onMessage);