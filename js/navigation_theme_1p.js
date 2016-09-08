var main_themes = document.getElementById('main_themes');
var theme_politique = document.getElementById('theme_politique');
var theme_politique_img = document.getElementById('theme_politique_img');
var theme_actu = document.getElementById('theme_actu');
var theme_actu_img = document.getElementById('theme_actu_img');
var theme_cinema = document.getElementById('theme_cinema');
var theme_cinema_img = document.getElementById('theme_cinema_img');
var theme_paint = document.getElementById('theme_paint');
var theme_paint_img = document.getElementById('theme_paint_img');
var theme_musique = document.getElementById('theme_musique');
var theme_musique_img = document.getElementById('theme_musique_img');
var theme_cuisine= document.getElementById('theme_cuisine');
var theme_cuisine_img = document.getElementById('theme_cuisine_img');
var theme_sport = document.getElementById('theme_sport');
var theme_sport_img = document.getElementById('theme_sport_img');
var theme_random = document.getElementById('theme_random');
var theme_random_img = document.getElementById('theme_random_img');

/****************************************************************/
/****************************************************************/
/****** THEMES ******/

// FONCTIONS DE REDIRECTIONS
function root_theme_random(){
	undisplayElementsTheme();
	setTimeout(function() { 
		document.location.href="root/sequence_random/sequence_random_ready.html";
	}, rooting_delay);
}

// FONCTIONS DE POSITIONNEMENTS - INIT & SWITCH
function displayElementsTheme(){
	displayHead();
	displayThemes();
}
function undisplayElementsTheme(){
	undisplayHead();
	undisplayThemes();
}

$("#theme_random").click(function(){
	console.log('je suis ici');
	root_theme_random();
});


function displayThemes(){

	main_themes.style.opacity= "1";
	main_themes.style.transition = "0.1s ease-out";
	// Politique
setTimeout(function() { 
	theme_politique.style.width = "80px";
	theme_politique.style.height = "80px";
	theme_politique.style.top= "-170px";
	theme_politique.style.left= "-35px";
	theme_politique.style.opacity= "1";
	theme_politique.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_politique_img.style.width = "40px";
	theme_politique_img.style.height = "40px";
	theme_politique_img.style.margin= "22% 0 0 24%";
	theme_politique_img.style.opacity = "1";
	theme_politique_img.style.transition = "0.4s ease-out";
	}, 200);
}, 0);
setTimeout(function() { 
	// cinema
	theme_cinema.style.width = "80px";
	theme_cinema.style.height = "80px";
	theme_cinema.style.top= "-135px";
	theme_cinema.style.left= "70px";
	theme_cinema.style.opacity= "1";
	theme_cinema.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_cinema_img.style.width = "40px";
	theme_cinema_img.style.height = "40px";
	theme_cinema_img.style.margin= "22% 0 0 24%";
	theme_cinema_img.style.opacity = "1";
	theme_cinema_img.style.transition = "0.4s ease-out";
	}, 200);
}, 40);
setTimeout(function() { 
	// paint
	theme_paint.style.width = "80px";
	theme_paint.style.height = "80px";
	theme_paint.style.top= "-40px";
	theme_paint.style.left= "100px";
	theme_paint.style.opacity= "1";
	theme_paint.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_paint_img.style.width = "40px";
	theme_paint_img.style.height = "40px";
	theme_paint_img.style.margin= "22% 0 0 24%";
	theme_paint_img.style.opacity = "1";
	theme_paint_img.style.transition = "0.4s ease-out";
	}, 200);
}, 80);
setTimeout(function() { 
	// cuisine
	theme_cuisine.style.width = "80px";
	theme_cuisine.style.height = "80px";
	theme_cuisine.style.top= "55px";
	theme_cuisine.style.left= "70px";
	theme_cuisine.style.opacity= "1";
	theme_cuisine.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_cuisine_img.style.width = "40px";
	theme_cuisine_img.style.height = "40px";
	theme_cuisine_img.style.margin= "22% 0 0 24%";
	theme_cuisine_img.style.opacity = "1";
	theme_cuisine_img.style.transition = "0.4s ease-out";
	}, 200);
}, 120);
setTimeout(function() { 
	// random
	theme_random.style.width = "150px";
	theme_random.style.height = "150px";
	theme_random.style.top= "110px";
	theme_random.style.left= "-70px";
	theme_random.style.opacity= "1";
	theme_random.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_random_img.style.width = "90px";
	theme_random_img.style.height = "90px";
	theme_random_img.style.margin= "22% 0 0 24%";
	theme_random_img.style.opacity = "1";
	theme_random_img.style.transition = "0.4s ease-out";
	}, 200);
}, 160);
setTimeout(function() { 
	// sport
	theme_sport.style.width = "80px";
	theme_sport.style.height = "80px";
	theme_sport.style.top= "55px";
	theme_sport.style.left= "-145px";
	theme_sport.style.opacity= "1";
	theme_sport.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_sport_img.style.width = "40px";
	theme_sport_img.style.height = "40px";
	theme_sport_img.style.margin= "22% 0 0 24%";
	theme_sport_img.style.opacity = "1";
	theme_sport_img.style.transition = "0.4s ease-out";
	}, 200);
}, 200);
setTimeout(function() { 
	// musique
	theme_musique.style.width = "80px";
	theme_musique.style.height = "80px";
	theme_musique.style.top= "-40px";
	theme_musique.style.left= "-175px";
	theme_musique.style.opacity= "1";
	theme_musique.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_musique_img.style.width = "40px";
	theme_musique_img.style.height = "40px";
	theme_musique_img.style.margin= "22% 0 0 24%";
	theme_musique_img.style.opacity = "1";
	theme_musique_img.style.transition = "0.4s ease-out";
	}, 200);
}, 240);
setTimeout(function() { 
	// actu
	theme_actu.style.width = "80px";
	theme_actu.style.height = "80px";
	theme_actu.style.top= "-135px";
	theme_actu.style.left= "-145px";
	theme_actu.style.opacity= "1";
	theme_actu.style.transition = "0.7s ease-out";
	setTimeout(function() { 
	theme_actu_img.style.width = "40px";
	theme_actu_img.style.height = "40px";
	theme_actu_img.style.margin= "22% 0 0 24%";
	theme_actu_img.style.opacity = "1";
	theme_actu_img.style.transition = "0.4s ease-out";
	}, 200);
}, 280);
}

function undisplayThemes(){

	main_themes.style.opacity= "0";
	main_themes.style.transition = "0.7s ease-out";
	// Politique
	theme_politique_img.style.width = "0px";
	theme_politique_img.style.height = "0px";
	theme_politique_img.style.margin= "50%";
	theme_politique_img.style.opacity = "0";
	theme_politique_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_politique.style.width = "0px";
	theme_politique.style.height = "0px";
	theme_politique.style.top= "0px";
	theme_politique.style.left= "5px";
	theme_politique.style.opacity= "0";
	theme_politique.style.transition = "0.7s ease-out";
	}, 200);
	// actu
	theme_actu_img.style.width = "0px";
	theme_actu_img.style.height = "0px";
	theme_actu_img.style.margin= "50%";
	theme_actu_img.style.opacity = "0";
	theme_actu_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_actu.style.width = "0px";
	theme_actu.style.height = "0px";
	theme_actu.style.top= "0px";
	theme_actu.style.left= "5px";
	theme_actu.style.opacity= "0";
	theme_actu.style.transition = "0.7s ease-out";
	}, 200);
	// cinema
	theme_cinema_img.style.width = "0px";
	theme_cinema_img.style.height = "0px";
	theme_cinema_img.style.margin= "50%";
	theme_cinema_img.style.opacity = "0";
	theme_cinema_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_cinema.style.width = "0px";
	theme_cinema.style.height = "0px";
	theme_cinema.style.top= "0px";
	theme_cinema.style.left= "5px";
	theme_cinema.style.opacity= "0";
	theme_cinema.style.transition = "0.7s ease-out";
	}, 200);
	// paint
	theme_paint_img.style.width = "0px";
	theme_paint_img.style.height = "0px";
	theme_paint_img.style.margin= "50%";
	theme_paint_img.style.opacity = "0";
	theme_paint_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_paint.style.width = "0px";
	theme_paint.style.height = "0px";
	theme_paint.style.top= "0px";
	theme_paint.style.left= "5px";
	theme_paint.style.opacity= "0";
	theme_paint.style.transition = "0.7s ease-out";
	}, 200);
	// musique
	theme_musique_img.style.width = "0px";
	theme_musique_img.style.height = "0px";
	theme_musique_img.style.margin= "50%";
	theme_musique_img.style.opacity = "0";
	theme_musique_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_musique.style.width = "0px";
	theme_musique.style.height = "0px";
	theme_musique.style.top= "0px";
	theme_musique.style.left= "5px";
	theme_musique.style.opacity= "0";
	theme_musique.style.transition = "0.7s ease-out";
	}, 200);
	// cuisine
	theme_cuisine_img.style.width = "0px";
	theme_cuisine_img.style.height = "0px";
	theme_cuisine_img.style.margin= "50%";
	theme_cuisine_img.style.opacity = "0";
	theme_cuisine_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_cuisine.style.width = "0px";
	theme_cuisine.style.height = "0px";
	theme_cuisine.style.top= "0px";
	theme_cuisine.style.left= "5px";
	theme_cuisine.style.opacity= "0";
	theme_cuisine.style.transition = "0.7s ease-out";
	}, 200);
	// sport
	theme_sport_img.style.width = "0px";
	theme_sport_img.style.height = "0px";
	theme_sport_img.style.margin= "50%";
	theme_sport_img.style.opacity = "0";
	theme_sport_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_sport.style.width = "0px";
	theme_sport.style.height = "0px";
	theme_sport.style.top= "0px";
	theme_sport.style.left= "5px";
	theme_sport.style.opacity= "0";
	theme_sport.style.transition = "0.7s ease-out";
	}, 200);
	// random
	theme_random_img.style.width = "0px";
	theme_random_img.style.height = "0px";
	theme_random_img.style.margin= "50%";
	theme_random_img.style.opacity = "0";
	theme_random_img.style.transition = "0.4s ease-out";
	setTimeout(function() { 
	theme_random.style.width = "0px";
	theme_random.style.height = "0px";
	theme_random.style.top= "0px";
	theme_random.style.left= "5px";
	theme_random.style.opacity= "0";
	theme_random.style.transition = "0.7s ease-out";
	}, 200);
}







