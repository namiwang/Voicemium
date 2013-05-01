var div = document.createElement("div");
div.setAttribute("id", "voicemium-message");
$("body").prepend(div);

function showMessageDiv(){
  $("#voicemium-message").html("Voicemium: listening").stop().clearQueue().fadeIn().delay(3000).fadeOut();
}

function handleCommand(cmd){
  $("#voicemium-message").html(cmd).stop().clearQueue().fadeIn().delay(3000).fadeOut();
  switch (cmd){
  }
}

function onMessage(request, sender, sendResponse) {

  switch (request.action){
    case "startRec":
      showMessageDiv();
      break;
    case "stopRec":
      break;
    case "gotCommand":
      handleCommand(request.command)
      break;
    default:
      break;
  }
  sendResponse({});
}

chrome.runtime.onMessage.addListener(onMessage);