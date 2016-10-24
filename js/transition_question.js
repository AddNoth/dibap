
/*** BROUILLON ***/

/****************************************************************/
/****************************************************************/


/****************************************************************/
/****************************************************************/


/****************************************************************/
/****************************************************************/


var rooting_delay = 900;

// MAIN NAVIGATION .JS
console.log('SCRIPT NAVIGUATION - OUVERT');
var app = document.getElementById('app');
var header_bar = document.getElementById('bar-header');
var interface_content = document.getElementById('interface_content');
var interface_menu = document.getElementById('menu_interface');
//
var main_play = document.getElementById('main_play');
var main_play_img = document.getElementById('main_play_img');
//
var main_players = document.getElementById('main_players');
var player_1 = document.getElementById('player_1');
var player_2 = document.getElementById('player_2');
var player_1_img = document.getElementById('player_1_img');
var player_2_img = document.getElementById('player_2_img');
//
var main_themes = document.getElementById('main_players');
//var player_1 = document.getElementById('player_1');
//var player_2 = document.getElementById('player_2');
//var player_1_img = document.getElementById('player_1_img');
//var player_2_img = document.getElementById('player_2_img');

/****************************************************************/
/****************************************************************/
/****** APP & HEAD ******/
function displayApp(){
	app.style.opacity = "1";
	app.style.transition = "0.3s ease-out";
	displayHead();
}

function undisplayApp(){
	app.style.opacity = "0";
	app.style.transition = "0.3s ease";
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
/****** PLAYERS ******/

// FONCTIONS DE REDIRECTIONS
function root1player(){
	setTimeout(function() { 
		document.location.href="themes_1p.html";
	}, rooting_delay);
}
function root2players(){
	setTimeout(function() { 
		//document.location.href="index.html"; UPDATE 
	}, rooting_delay);
}

// FONCTIONS DE POSITIONNEMENTS - INIT & SWITCH
function displayElementsPlayers(){
	displayPlayers();
}
$("#player_1").click(function(){
	removePlayers();
	root1player();
});
$("#player_2").click(function(){
	//removePlayers(); UPDATE 
	//root2players(); UPDATE 
});
function removePlayers(){
	//
	undisplayHead();
	// 1 PLAYER
	player_1_img.style.width = "0px";
	player_1_img.style.height = "0px";
	player_1_img.style.margin= "50%";
	player_1_img.style.opacity = "0";
	player_1_img.style.transition = "0.4s ease";

	setTimeout(function() { 
	player_1.style.width = "0px";
	player_1.style.height = "0px";
	player_1.style.top= "0px";
	player_1.style.left= "5px";
	player_1.style.opacity= "0";
	player_1.style.transition = "0.7s ease";
	}, 200);
	// 2 PLAYERS
	player_2_img.style.width = "0px";
	player_2_img.style.height = "0px";
	player_2_img.style.margin= "50%";
	player_2_img.style.opacity = "0";
	player_2_img.style.transition = "0.4s ease";

	setTimeout(function() { 
	player_2.style.width = "0px";
	player_2.style.height = "0px";
	player_2.style.top= "0px";
	player_2.style.left= "5px";
	player_2.style.opacity= "0";
	player_2.style.transition = "0.7s ease";
	}, 200);

	// POINT CENTRAL
	setTimeout(function() {
	main_players.style.opacity= "0";
	main_players.style.transition = "0.3s ease";
	}, 500);
}
function displayPlayers(){
	//
	displayHead();

	main_players.style.opacity= "1";
	main_players.style.transition = "0.2s ease-out";
	// 1 PLAYER
	player_1.style.width = "150px";
	player_1.style.height = "150px";
	player_1.style.top= "-200px";
	player_1.style.left= "-75px";
	player_1.style.opacity= "1";
	player_1.style.transition = "0.7s ease-out";

	setTimeout(function() { 
	player_1_img.style.width = "80px";
	player_1_img.style.height = "80px";
	player_1_img.style.margin= "22% 0 0 24%";
	player_1_img.style.opacity = "1";
	player_1_img.style.transition = "0.4s ease-out";
	}, 200);
	// 2 PLAYERS
	player_2.style.width = "150px";
	player_2.style.height = "150px";
	player_2.style.top= "50px";
	player_2.style.left= "-75px";
	player_2.style.opacity= "1";
	player_2.style.transition = "0.7s ease-out";

	setTimeout(function() { 
	player_2_img.style.width = "80px";
	player_2_img.style.height = "80px";
	player_2_img.style.margin= "22% 0 0 24%";
	player_2_img.style.opacity = "1";
	player_2_img.style.transition = "0.4s ease-out";
	}, 200)
}

/****************************************************************/
/****************************************************************/
/****** MENU ******/
function root_menu(){
	undisplayApp();
	setTimeout(function() { 
		document.location.href="../../menu.html";
	}, rooting_delay);
}

// GO BACK
function GoBack()
{
	window.location=history.go(-1);
	window.location.reload();
}

var prochainement = document.getElementById('prochainement');
//
function prochainementSurDibap(){
	console.log('im in !!!');
	prochainement.style.display='block';
	setTimeout(function() { 
		prochainement.style.display='none';
	}, 2000);
}
