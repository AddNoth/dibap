var rooting_delay = 900;

// MAIN NAVIGATION .JS
console.log('SCRIPT NAVIGUATION - OUVERT');
var app = document.getElementById('app');
var header_bar = document.getElementById('bar-header');

var bubble = document.getElementById('question-container');
var progressTimeBarElement = document.getElementById('progressTimeBar');
var buttonPlus = document.getElementById('plus');
var buttonMoins = document.getElementById('moins');

/****************************************************************/
/****************************************************************/
/****** APP & HEAD ******/

function displayAppQuest(){
	displayTimer();
	// si + ou - clické => transition
	if (window.switch_question=='0') {
		app.style.opacity = "1";
		app.style.transition = "0.3s ease-out";
		displayHead();
		setTimeout(function() { 
			displayBubble();
		}, 700);
	// si switch => no transition
	}else{
		app.style.opacity = "1";
		displayBubble();
	}
}

function displayBubble(){
	bubble.style.width = "95%";
	bubble.style.opacity= "1";
	bubble.style.transition = "0.4s ease-out";
}

function displayTimer(){
	alert();
	var timerLimit=window.limitTime/1000; // Conversion en seconde pour le CSS
	progressTimeBarElement.style.marginLeft = "0%";
	progressTimeBarElement.style.transition = ""+timerLimit+"s ease-out";
	setTimeout(function() { 
		unlockButtons();
	}, window.limitTime);
}

function unlockButtons(){
	buttonPlus.style.opacity = "1";
	buttonMoins.style.opacity = "1";
	buttonPlus.style.transition = "0.3s ease";
	buttonMoins.style.transition = "0.3s ease";
}

function displayAppQuestResult(){
	app.style.opacity = "1";
	app.style.transition = "0.3s ease-out";
	displayHead();
	setTimeout(function() { 
		displayBubble();
	}, 700);
}

// Undisplay full APP
function undisplayApp(){
	app.style.opacity = "0";
	app.style.transition = "0.3s ease";
}

// Undisplay full APP when timer done
function undisplayAppButton(){
	// If time not done 
	if (window.currentTime<window.limitTime) {
		// Undisplay App
		app.style.opacity = "0";
		app.style.transition = "0.3s ease";
	}else{
		// Do nothing
	}
}

function displayHead(){
	header_bar.style.opacity = "1";
	header_bar.style.transition = "0.4s ease-out";
}

function undisplayHead(){
	header_bar.style.opacity = "0";
	header_bar.style.transition = "0.4s ease";
}

/****************************************************************/
/****************************************************************/
/****** QUESTIONNAIRE ******/



/****************************************************************/
/****************************************************************/
/****** MENU ******/
function root_menu(){
	undisplayApp();
	setTimeout(function() { 
		document.location.href="../../menu.html";
	}, rooting_delay);
}

