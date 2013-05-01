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

function speechRecognize () {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onstart = function() {
    alert('start recognize');
  };

  recognition.onresult = function(event) {
    var final_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      }
    }
    alert('final_transcript: ' + final_transcript);
    chrome.runtime.sendMessage({action: 'recognized',transcript: final_transcript},
                               function (response) {});
  };

  recognition.onerror = function(event) {
    alert('error' + event.error);
  };

  recognition.onend = function() {
    alert('recognize end');
  };
  recognition.start();
}

function onMessage(request, sender, sendResponse) {
  switch (request.action){
    case "startRec":
      speechRecognize();
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
