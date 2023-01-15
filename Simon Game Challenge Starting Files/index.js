
const NUMBER_OF_BUTTONS = 4;
const PRESSED_CLASS = "pressed"
const INTERVAL_PRESSED = 200
const INTERVAL_REPLAY = 2000
const INTERVAL_GAME_OVER = 8000
const BUTTONS  = ["green","red","yellow","blue"];

var gameStarted = false;
var sequence = [];
var currSequenceIndex = 0;
function randomButton(){
	let num = Math.floor(Math.random()*NUMBER_OF_BUTTONS);
	return BUTTONS[num];
}
function playGame(){
	addButtonToSequence();
	playSequence();
	currSequenceIndex = 0;
}
function pressedButton(evt){
	if(!gameStarted){
		return;
	}
	if(evt.target.id ==  sequence[currSequenceIndex]){
		soundAndPressed(evt.target.id)
		$("h1").text("Bien...")
		currSequenceIndex++;
		
		if(currSequenceIndex == sequence.length){
			$("h1").text("Correcto!")
			setTimeout(playGame,INTERVAL_REPLAY)
			return;
		}
	}else{
		let aud = new Audio("./sounds/wrong.mp3");	
		aud.play();
		$("h1").text("GAME OVER, tu record fue de "+sequence.length)
		setTimeout(function(){
			$("h1").text("Presiona una tecla para empezar")
		},INTERVAL_GAME_OVER)
		sequence = []
		gameStarted = false
	}
}

function addButtonToSequence(){
	sequence.push(randomButton())
}
function playSequence(){
	for(let i = 0; i<sequence.length; i++){
		setTimeout(function(){	
			soundAndPressed(sequence[i])
		},i*INTERVAL_PRESSED*2)
	}
}

function soundAndPressed(color="wrong"){
	let aud = new Audio("./sounds/"+color+".mp3");					
	aud.play();
	$("#"+color).addClass(PRESSED_CLASS);
	setTimeout(function(){
		$("#"+color).removeClass(PRESSED_CLASS)
	},INTERVAL_PRESSED)
}
$(document).on("keypress",function(){
	if(!gameStarted){
		gameStarted = true
		playGame()
	}
})
$("h1").on("click",()=>{
	if(!gameStarted){
		gameStarted = true
		playGame()
	}
})
$("#green").on("click",pressedButton)
$("#yellow").on("click", pressedButton)
$("#blue").on("click",pressedButton)
$("#red").on("click",pressedButton)
