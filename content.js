function showMessageDiv() {
  var div = document.createElement("div");
  div.setAttribute("id", "voicemium-message");
  $("body").prepend(div);
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
  speechRecognize();
  showMessageDiv();
  sendResponse({});
}

chrome.runtime.onMessage.addListener(onMessage);
