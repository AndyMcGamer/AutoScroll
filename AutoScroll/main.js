var speed = 50;
var toggle = false;
var positive;
var time;

function scroll(){
	window.scrollBy(0, positive * speed);
	return;
}

function execute(){
	time = setInterval(scroll, 60);
	return;
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){

  if (msg.text) {
    switch (msg.text) {
      case 'scrollUp':
      	toggle = !toggle;
      	if(toggle){
      		positive = -1;
      		execute();
      	}else{
      		clearInterval(time);
      	}
        break;
      case 'scrollDown':
      	toggle = !toggle;
      	if(toggle){
      		positive = 1;
      		execute();
      	}else{
      		clearInterval(time);
      	}
      default:
        sendResponse('');
    }
  }else{
  	if(msg.speed){
  		speed = msg.speed;
  	}
  }
});