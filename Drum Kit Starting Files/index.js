
function playDrum(evt){
	var mySwitch = "";
	if(evt.type == "keydown"){
		mySwitch = evt.key.toLowerCase();
	}else{
		mySwitch  = evt.currentTarget.innerHTML.toLowerCase();
	}
	switch(mySwitch){
		case "w":
			var tom1 = new Audio("./sounds/tom-1.mp3")
			tom1.play()
		break
		case "a":
			var tom2 = new Audio("./sounds/tom-2.mp3")
			tom2.play()
		break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3")
			tom3.play()
		break;
		case "d":
			var t4 = new Audio("sounds/snare.mp3")
			t4.play();
		break;
		case "j":
			var t5 = new Audio("sounds/crash.mp3")
			t5.play()
		break;
		case "k":
			var t6 = new Audio("sounds/kick-bass.mp3")
			t6.play()
		break;
		case "l":
			var t7 = new Audio("sounds/tom-4.mp3")
			t7.play()
		break;
	}
	

}

var instruments = document.querySelectorAll(".drum");
for(var i = 0; i< instruments.length; i++){
	instruments[i].focus();
	instruments[i].addEventListener("keydown",playDrum);
	instruments[i].addEventListener("click", playDrum);
}




