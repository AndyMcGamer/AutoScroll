document.addEventListener('DOMContentLoaded', function() {
	var server = localStorage.getItem("server");
	var slider = document.getElementById("myRange");
	var output = document.getElementById("output");
	var speed;
	slider.value = (server) ? server : slider.value;
	output.innerHTML = (server) ? server : slider.value; // Display the default slider value
	speed = slider.value;

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	  output.innerHTML = this.value;
	  chrome.tabs.query(
      {currentWindow: true, active: true}, 
      (tabs) => { chrome.tabs.sendMessage(tabs[0].id, { speed : this.value }); }
    )
	  localStorage.setItem("server", slider.value);
	}
}, false);

