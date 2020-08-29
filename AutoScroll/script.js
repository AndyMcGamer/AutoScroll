

chrome.commands.onCommand.addListener(function (command) {
  if (command == "scrollUp") {
    chrome.tabs.query(
      {currentWindow: true, active: true}, 
      (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { text: 'scrollUp' }); }
    )
  }

  if (command == "scrollDown") {
    chrome.tabs.query(
      {currentWindow: true, active: true}, 
      (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { text: 'scrollDown' }); }
    )
  }
});