var marvelsound = "avengerthm";
var pixarsound = "pixarthm"
var logicsound = "logicthm"
var hpsound = "hpthm"

$(document).ready( function(){


$("#personaltitles").html("I am a . . .")
	$(function () {
	  count = 0;
	  titleArray = ["S t u d e n t", "F i l m m a k e r", "C o m p u t e r  S c i e n t i s t", "D r e a m e r"];
	  setInterval(function () {
	    count++;
	    $("#personaltitles").fadeOut(400, function () {
	      $(this).text(titleArray[count % titleArray.length]).fadeIn(400);
	    });
	  }, 2000);
	});


			   $(".slidingup").click(function(){
			     $("p").slideUp();
					 $(".slidingup").velocity({ opacity: 0 }, { display: "hidden" });
					 $(".slidingdown").velocity({ opacity: 1 }, { display: "block" });
			   });
			   $(".slidingdown").click(function(){
			     $("p").slideDown();
					 $(".slidingdown").velocity({ opacity: 0 }, { display: "hidden" });
 					$(".slidingup").velocity({ opacity: 1 }, { display: "block" });
			   });




	var clicked = false;

	$("#playlogic").click(function(){
			if(clicked){
					$("body").css('background-image', 'url("portfolio_images/logicback.png")');
					$("body").css('background-color', '#cc2225');
					$("#by").html('Logic </br> Fan')

					$("h2").css('color', 'white')
					$("#personaltitles").css('color', 'white')

					clicked  = false;
					playSoundLogic();
			} else {
					$("body").css('background-color', 'rgba(63, 132, 222, 0.30)');
					$("body").css('background-image', 'none');
					$("h2").css('color', 'black')
					$("#personaltitles").css('color', 'black')
					clicked  = true;
			}
	 });





	 var clicked = false;

 	$("#playmarvel").click(function(){
 			if(clicked){
 					$("body").css('background-image', 'url("portfolio_images/marvelback.png")');
					$("body").css('background-color', '#1b2e3c');
					$("#by").html('Marvel </br> Enthusiast')

 					$("h2").css('color', 'white')
 					$("#personaltitles").css('color', 'white')
					playSoundMarvel();

 					clicked  = false;
 			} else {
 					$("body").css('background-color', 'rgba(63, 132, 222, 0.30)');
 					$("body").css('background-image', 'none');
 					$("h2").css('color', 'black')
 					$("#personaltitles").css('color', 'black')

 					clicked  = true;
 			}
 	 });







	 var clicked = false;

	 $("#playpixar").click(function(){
			 if(clicked){
					 $("body").css('background-image', 'url("portfolio_images/pixarback.png")', 'width', '100%');
					 $("body").css('background-color', '#b8d0e0');
					 $("h2").css('color', 'white')
					 $("#by").html('Pixar </br> Lover')

					 $("#personaltitles").css('color', 'white')
					 clicked  = false;
					 playSoundPixar();
			 } else {
					 $("body").css('background-color', 'rgba(63, 132, 222, 0.30)');
					 $("body").css('background-image', 'none');
					 $("h2").css('color', 'black')
					 $("#personaltitles").css('color', 'black')
					 clicked  = true;
			 }
		});
		var clicked = false;

		$("#playhp").click(function(){
				if(clicked){
						$("body").css('background-image', 'url("portfolio_images/hpback.png")');
						$("h2").css('color', 'white')
						$("#personaltitles").css('color', 'white')
						$("#by").html('Harry Potter </br> Expert')

						clicked  = false;
						playSoundHP();
				} else {
						$("body").css('background-color', 'rgba(63, 132, 222, 0.30)');
						$("body").css('background-image', 'none');
						$("h2").css('color', 'black')
						$("#personaltitles").css('color', 'black')
						clicked  = true;
				}
		 });

		 	$(function () {
		 	  count = 0;
		 	  powerArray = ["Gender", " ", "Equality", " "];
		 	  setInterval(function () {
		 	    count++;
		 	    $("#femm").fadeOut(400, function () {
		 	      $(this).text(powerArray[count % powerArray.length]).fadeIn(400);
		 	    });
		 	  }, 2000);
		 	});


});


function playSoundMarvel () {
	console.log("play!");
	createjs.Sound.play(marvelsound);
}


function playSoundPixar () {
	console.log("play!");
	createjs.Sound.play(pixarsound);
}

function playSoundLogic () {
	console.log("play!");
	createjs.Sound.play(logicsound);
}

function playSoundHP () {
	console.log("play!");
	createjs.Sound.play(hpsound);
}

function loadSound () {
	console.log("loading Sound!");
	 createjs.Sound.registerSound("theme_music/pixar.mp3", pixarsound);
	 createjs.Sound.registerSound("theme_music/avengersthm.m4a", marvelsound);
	 createjs.Sound.registerSound("theme_music/contactthm.m4a", logicsound);
	 createjs.Sound.registerSound("theme_music/hpthm.m4a", hpsound);
}
