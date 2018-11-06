// Naming the colour mixing object class for DRY methodology purposes.
var pearlObj = ".box .box_wrapper .pearl";
document.addEventListener("DOMContentLoaded", function() {
	// Start the barba page transition plugin.
	Barba.Pjax.init();
	Barba.Prefetch.init();
	// Access the url of the current page to figure out where the user is currently - and update the next / previous page links.
	getPageDetails();
	// Weird issue where this was popping up as undefined - I'm guessing if there was no class present it was breaking? Fixed it by setting the value back to the generic classname if it doesn't find the class.
	// Check mute status and reapply settings. If the mute status is undefined, reset it back to the default. Set this value in localStorage for safe keeping and persistence.
	if ($('button.sound_settings').attr('class') == undefined) {
		console.log("WHOOPS");
		localStorage.setItem("currentSoundClass", 'nav_button--context sound_settings');
	} else {
		var muteStatus = $('button.sound_settings').attr('class');
		localStorage.setItem("currentSoundClass", muteStatus);aaddd
	}
});

// User Interface Sounds --------------------------------------------------------------------------
// Define names for the user interface sounds. Makes little difference.
var buttonClick = "click";
var buttonHome = "home";
var quizCorrect = "qCorrect";
var quizIncorrect = "qIncorrect";
// Load up definitions for sound effects. Registers sounds, and we run this function on body load as recommended.
function loadSound() {
	createjs.Sound.registerSound("assets/sound/button3.m4a", buttonClick);
	createjs.Sound.registerSound("assets/sound/home.m4a", buttonHome);
	createjs.Sound.registerSound("assets/sound/correct.m4a", quizCorrect);
	createjs.Sound.registerSound("assets/sound/incorrect.m4a", quizIncorrect);
}
// Rather than repeat the same command, threw this playSound command in a function with the names as an argument.
function playSound(soundName) {
	createjs.Sound.play(soundName);
}




// Pagination Config --------------------------------------------------------------------------
Barba.Dispatcher.on("newPageReady", function(e) {
	// Get the new URL filename and once again update links.
	getPageDetails();
	localStorage.removeItem('hueData');
	// Get mute settings from Local Storage
	$('button.sound_settings').addClass(localStorage.getItem("currentSoundClass"));
	if ($('button.sound_settings').hasClass('muted')) {
		createjs.Sound.muted = true;
		$('button.sound_settings img').attr("src", 'assets/icons/volumeMute.svg');
	} else {
		createjs.Sound.muted = false;
		$('button.sound_settings img').attr("src", 'assets/icons/volume.svg');
	}


	// Open the Quiz --------------------------------------------------------------------------
	// Quiz appears from the bottom. I would have used the javascript SlideIn animation for this, but it was pretty CPU heavy when used in conjunction with the color mixing module and resulted in dropped frames.
	$('.quiz_open').click(function() {
		console.log("Open!");
		$('.quiz_module, .overlay').addClass('open');
		quizApplication();
	});
	// When you want to close the quiz, users can click on the overlay or the close button.
	$('.quiz_close, .overlay').click(function() {
		console.log("Closed!");
		$('.quiz_module, .overlay').removeClass('open');
	});
	// We want to be able to change the mute settings without having to refresh the page!
	$('button.sound_settings').click(function() {
		$(this).toggleClass('muted');
		// Puts the current mute class in local storage to read later.
		localStorage.setItem("currentSoundClass", $(this).attr('class'));
		// Updates sound settings for buttons which don't trigger a page change.
		if ($(this).hasClass('muted')) {
			console.log("Muted");
			createjs.Sound.muted = true;
			$('button.sound_settings img').attr("src", 'assets/icons/VolumeMute.svg');
		} else {
			console.log("Unmuted");
			createjs.Sound.muted = false;
			$('button.sound_settings img').attr("src", 'assets/icons/Volume.svg');
		}
	});
	// Setting different color schemes for specific pages. I decided to indicate the page type based from the URL but I'm sure there's much more elegant ways to do this! UPDATE: There is :)
	var href = document.location.href;
	var currentFile = href.substr(href.lastIndexOf("/") + 1);
	if (currentFile == "page3.html") {
		//	$("body").get(0).style.setProperty("--background", "var(--ui-dark-background");
		//	$("body").get(0).style.setProperty("--button-color-default", "var(--ui-dark-transparent)");
		//	$("body").get(0).style.setProperty("--button-color-hover", "var(--ui-dark-hover");
		//	$("body").get(0).style.setProperty("--button-color-active", "var(--ui-dark-active)");
		//	$("body").get(0).style.setProperty("--text-color", "white");
		//	$("body").get(0).style.setProperty("--button-text-color", "rgba(255,255,255,0.75)");
		//	$("body").get(0).style.setProperty("--button-color-featured-default", "var(--ui-dark-featured)");
		//	$("body").get(0).style.setProperty("--button-color-featured-hover", "var(--ui-dark-featured-hover)");
		//	$("body").get(0).style.setProperty("--button-color-featured-active", "var(--ui-dark-featured-active)");
		//	$('.nav_button--context img').css('filter', 'invert(100%');
		//	$('.nav_button').css('-webkit-backdrop-filter', 'blur(32px)');
		$("html").addClass('darkmode');
	} else if (currentFile == "page4.html") {
		//	$("body").get(0).style.setProperty("--background", "var(--ui-dark-background");
		//	$("body").get(0).style.setProperty("--button-color-default", "var(--ui-dark-transparent)");
		//	$("body").get(0).style.setProperty("--button-color-hover", "var(--ui-dark-hover");
		//	$("body").get(0).style.setProperty("--button-color-active", "var(--ui-dark-active)");
		//	$("body").get(0).style.setProperty("--text-color", "white");
		//	$("body").get(0).style.setProperty("--button-text-color", "rgba(255,255,255,0.75)");
		//	$("body").get(0).style.setProperty("--button-color-featured-default", "var(--ui-dark-featured)");
		//	$("body").get(0).style.setProperty("--button-color-featured-hover", "var(--ui-dark-featured-hover)");
		//	$("body").get(0).style.setProperty("--button-color-featured-active", "var(--ui-dark-featured-active)");
		//	$('.nav_button--context img').css('filter', 'invert(100%');
		//	$('.nav_button').css('-webkit-backdrop-filter', 'blur(32px)');
		$("html").addClass('darkmode');
	} else if (currentFile == "index.html") {
		$("html").addClass('darkmode');
	} else {
		//	console.log(currentFile + " - Bring back the light!");
		//	$("body").get(0).style.setProperty("--background", "var(--ui-light-background");
		//	$("body").get(0).style.setProperty("--button-color-default", "var(--ui-light)");
		//	$("body").get(0).style.setProperty("--button-color-hover", "var(--ui-light-hover");
		//	$("body").get(0).style.setProperty("--button-color-active", "var(--ui-light-active)");
		//	$("body").get(0).style.setProperty("--text-color", "#2E2E3E");
		//	$("body").get(0).style.setProperty("--button-text-color", "rgba(0,0,0,0.75)");
		//	$("body").get(0).style.setProperty("--button-color-featured-default", "var(--ui-light-featured)");
		//	$("body").get(0).style.setProperty("--button-color-featured-hover", "var(--ui-light-featured-hover)");
		//	$("body").get(0).style.setProperty("--button-color-featured-active", "var(--ui-light-featured-active)");
		//	$('.nav_button--context img').css('filter', 'invert(0%');
		//	$('.nav_button').css('-webkit-backdrop-filter', 'none');
		$("html").removeClass('darkmode');
	}
	// Load sounds and apply to button and item classes
	$(".nav_button--context:not(.nav_button--home), label").click(function() {
		playSound(buttonClick);
	});
	$(".nav_button--home, .nav_button--standard, .nav_segmented").click(function() {
		playSound(buttonHome);
	});
	$(".welcome_container button").click(function() {
		playSound(quizCorrect);
	});
});


// Colors! --------------------------------------------------------------------------
function getRandomColor() {
	//	Using HSL to generate bright, random colors. this can be done in hex but it's a lot easier in HSL!
	//	IMPROVE: for each time the button is clicked, add a random amount within a certain range to a repeat number in order to get cyclical colors. Done! UPDATE: Persistence is a pain here so a random colour works just as well.
	var currentHue = localStorage.getItem("hueData");
	console.log(currentHue + "CURRENT HUE");
	var cyclicalHue = 0;
	// using Math.Random here, but I quickly found that random numbers created by anime.js were much easier to use.
	var hueInitial = Math.random() * 360;
	//	Adding a slight bit of variation to the saturation, but we want to keep colours bright.
	var satInitial = Math.random() * 30 + 80;
	//	Same with lightness.
	var lightInitial = "55%";
	//	console.log("HUE " + hueInitial);
	//	console.log("SAT " + satInitial);
	//	console.log("LIGHT " + lightInitial);
	//	Legacy code where I would add a number on to the previous to generate hue - didn't work to well in regards of persistence.
	var hueAdd = (Math.random() + 1) * 2 * 50;
	localStorage.setItem("hueData", parseFloat(currentHue) + parseFloat(hueAdd));
	console.log("The Current Hue is " + currentHue);
	// color = "hsl(" + Math.random() * 360 + "," + (Math.random() + 70) * 30 + "%, 50%)";
	//	These are the three variables which come together to make our sweet random color.
	color = "hsl(" + hueInitial + "," + satInitial + "%," + lightInitial + ")";
	return color;
}
// Sets the next and previous page link dynamically.
function getPageDetails() {
	//	Get current URL.
	var href = document.location.href;
	//	Split the URL to get the last part.
	var currentFile = href.substr(href.lastIndexOf("/") + 1);
	//	If we aren't on the home page, next page is the current URL name + 1, previous page is the current URL name - 1.
	if (currentFile !== "index.html") {
		var currentPageNum = parseInt(currentFile.match(/\d+/)[0]);
		var prevPage = "page" + parseInt(currentPageNum - 1) + ".html";
		var nextPage = "page" + parseInt(currentPageNum + 1) + ".html";
		//	If we are on the home page, next page will always be page 1. I think this was unnecessary and I just hard coded the link in HTML.
	} else if (currentFile == "index.html") {
		console.log("YARRR");
		var nextPage = "page1.html";
		$(".module_start").attr("href", nextPage);
	}
	$(".nav_link--back").attr("href", prevPage);
	$(".nav_link--forward").attr("href", nextPage);
}

function colorCreate(pearlColor) {
	//	Here we create the little colour bubbles, or 'pearls' for the sake of code clarity.
	//	this gets the size of the page boundary in order to make accurate calculation in keeping the pearls roughly in the centre of the page.
	var boxWidth = $(".box").width() / 2;
	var boxHeight = $(".box").height() / 2;
	console.log(boxWidth);
	console.log(boxHeight);
	//	Random sizing for the pearl size and position using sweet anime.js goodness.
	var pearlSize = anime.random(50, 400);
	var leftPos = anime.random(-100, 100) - (pearlSize / 2) + boxWidth + "px";
	var topPos = anime.random(-100, 100) - (pearlSize / 2) + boxHeight + "px";
	//	creating a variable for the pearl structure. I injected the random variables here (rather than the createDiv animation as doing so affects ALL pearls, rather than just the one being created. If a pearl is being added to the canvas I only want that one to be animated, not all of them.)
	var pearlPre = $('<div></div>').addClass('pearl').css('background', color).css('width', pearlSize).css('height', pearlSize).css('top', topPos).css('left', leftPos).css('opacity', '0')
		//	Centres the pearl upon load.
		.css('transform', 'translate(-50%, -50%) scale(0)');
	//	And we're adding it to the list of children under the box wrapper class.
	var pearlPost = $(".box .box_wrapper").append(pearlPre);
	//	A simple animation to take the pearl from opacity and scale 0, to 1.
	var createDiv = anime({
		targets: pearlObj,
		opacity: 1,
		scale: 1
	});
}

function quizApplication() {

	$('.quiz_module .nav_button--validate').click(function() {

		var score = 0;

		var answerNum = $('.question').find(':checked').length;
		var questionNum = $('.quiz_module .question').length;

		$('.quiz_message, .feedback_container *').remove();

		console.log("Number of Questions is " + questionNum);
		console.log("Number of answered questions is " + answerNum);

		if (answerNum == questionNum) {
			$('.question').each(function() {
				$(this).removeClass('answer_incorrect answer_correct');
				//var selectedAnswer = $(this).prop('checked', true);
				//var correctAnswer =  selectedAnswer.attr('correct').length;
				var correctAnswer = $(this).find(':checked[correct]').length;

				if (correctAnswer == 1) {
					$(this).addClass('answer_correct');
					console.log("Correct Answer!");
					$(this).append('<p class="quiz_message">Nice Work!</p>');
					score++;
				} else {
					console.log("Incorrect Answer :(");
					$(this).addClass('answer_incorrect');
					$(this).append('<p class="quiz_message">Sorry, try again.</p>');
				}
			});

		} else {
			$('.quiz_module .feedback_container').append('<div class="quiz_message"><h3>Sorry!</h3><p>Make sure to enter all your answers before you submit the quiz!</p></div>');
			const shakeNum = 64;
			var shakeWindow = anime({
				targets: ".quiz_module",
				duration: 500,
				translateX: [{
						value: shakeNum * -1,
					},
					{
						value: shakeNum,
					},
					{
						value: shakeNum / -2,
					},
					{
						value: shakeNum / 2,
					},
					{
						value: 0
					}
				],
				complete: function(anim) {
					// Deletes all pearl DOM elements AFTER the animation has finished.
					$(pearlObj).remove();
				}
			});
			console.log("Not Enough Answers!");
		}

		// Output score
		var scorePercentage = score / questionNum * 100;
		var scoreGreat = 80;
		var scoreGood = 50;

		console.log("current score is" + scorePercentage)

		if (answerNum == questionNum) {
			if (scorePercentage >= scoreGreat) {
				playSound(quizCorrect);
				console.log("Great Score Champ!")
				$('.quiz_module .feedback_container').append('<div class="quiz_message"><h3>' + scorePercentage + '%</h3><p>That is a fantastic score, well done! Click close at the top of this window to return to the learning module.</p></div>');
			}
			if (scorePercentage >= scoreGood && scorePercentage < scoreGreat) {
				console.log("Good!")
				playSound(quizCorrect);
				$('.quiz_module .feedback_container').append('<div class="quiz_message"><h3>' + scorePercentage + '%</h3><p>Not a bad score, well done! Click close at the top of this window to return to the learning module. or carry on to see if you can beat your current score.</p></div>');
			}
			if (scorePercentage < scoreGood) {
				console.log("Ouch!")
				playSound(quizIncorrect);
				$('.quiz_module .feedback_container').append('<div class="quiz_message"><h3>' + scorePercentage + '%</h3><p>Keep Trying! Click close at the top of this window to return to the learning module. or carry on to see if you can beat your current score.</p></div>');
				const shakeNum = 64;
			var shakeWindow = anime({
				targets: ".quiz_module",
				duration: 500,
				translateX: [{
						value: shakeNum * -1,
					},
					{
						value: shakeNum,
					},
					{
						value: shakeNum / -2,
					},
					{
						value: shakeNum / 2,
					},
					{
						value: 0
					}
				],
				complete: function(anim) {
					// Deletes all pearl DOM elements AFTER the animation has finished.
					$(pearlObj).remove();
				}
			});
			}
			if (scorePercentage < 0) {
				console.log("Very Ouch")
				playSound(quizIncorrect);
				$('.quiz_module .feedback_container').append('<div class="quiz_message"><h3>' + scorePercentage + '%</h3><p>There is something wrong with you. Keep away from the other kids and click close at the top of this window to return to the learning module. Your teacher and parents have been informed.</p></div>');
				const shakeNum = 128;
			var shakeWindow = anime({
				targets: ".quiz_module",
				duration: 500,
				translateX: [{
						value: shakeNum * -1,
					},
					{
						value: shakeNum,
					},
					{
						value: shakeNum / -2,
					},
					{
						value: shakeNum / 2,
					},
					{
						value: 0
					}
				],
				complete: function(anim) {
					// Deletes all pearl DOM elements AFTER the animation has finished.
					$(pearlObj).remove();
				}
			});
			}
		}
	});

} // end document ready


// Page Load --------------------------------------------------------------------------
// When barba plugin has a new page ready, follow this code. Very similar to onPageReady.
Barba.Dispatcher.on("newPageReady", function(e) {

	//	Load up the magnifyJS plugin.
	$('.zoom').magnify();
	//	Remove any pearls from the list of actively animated objects.
	anime.remove(pearlObj);
	$('.color_add').on("click", function(e) {
		e.preventDefault(); // Removes default behavior of the anchor tag. this probably should be a button!
		anime.remove(".box div"); // Clears the current animation to reset before the button is clicked again.		
		// Gets a new random colour and brings it over to the colorCreate function to create a new pearl.
		getRandomColor();
		colorCreate(color);
		console.log(color);
		//	We make the pearls draggable using Jquery UI.
		$(pearlObj).draggable({});
		//	This function randomly increases the scale upon drag of a pearl to ensure it's visible (and not too small to see!) I tried doing this with CSS transitions by resetting scale to scale(1) but transform origins were all messed up. Animating this with anime.js seems to do the trick.
		$(pearlObj).mousedown(function() {
			anime.remove(pearlObj);
			var currentScale = $(this).css('transform');
			console.log(currentScale);
			var drag = anime({
				targets: this,
				opacity: 1,
				scale: function(anim) {
					return anime.random(75, 125) / 100;
				}
			});
		});
	});


	// Pearl Functions --------------------------------------------------------------------------
	//	I love this function. Here, we're shuffling the background colour, size and position of pearls all at once.
	$(".color_arrange").on("click", function(e) {
		//	Shutting down actively-animated elements on canvas.
		anime.remove(pearlObj);
		var pearlSize = anime.random(200, 400);
		var boxWidth = $(".box").width() / 2;
		var boxHeight = $(".box").height() / 2;
		var shuffle = anime({
			targets: pearlObj,
			width: pearlSize,
			height: pearlSize,
			top: function(anim) {
				return anime.random(-300, 300) - (pearlSize / 2) + boxHeight + "px";
			},
			left: function(anim) {
				return anime.random(-300, 300) - (pearlSize / 2) + boxWidth + "px";
			},
			scale: function(anim) {
				return anime.random(75, 100) / 100;
			},
			//	A different, probably cleaner method of generating a random colour. I added a little more variation to the available colours here, has users can just click again if needed to switch them around.
			backgroundColor: function() {
				return "hsl(" + anime.random(0, 300) + ", " + anime.random(75, 100) + "%, " + anime.random(40, 60) + "%)";
			},
			complete: function(anim) {
				anime.remove(pearlObj);
			}
		});
	});
	$('.color_clear').on("click", function(e) {
		anime.remove(pearlObj);
		//	Performs an animation to take the objects to 0% opacity and scale before deleting them from the scene. it's a little slow, but it works!
		var zoomOut = anime({
			targets: pearlObj,
			opacity: 0,
			scale: 0,
			complete: function(anim) {
				// Deletes all pearl DOM elements AFTER the animation has finished.
				$(pearlObj).remove();
			}
		});
	});
	$('.color_smaller').on("click", function(e) {
		anime.remove(pearlObj);
		//	Shrinks the pearls to maximum of 50% size, and minimum of 25%.
		var zoomSmaller = anime({
			targets: pearlObj,
			scale: function(anim) {
				return anime.random(25, 50) / 100;
			}
		});
	});
	$('.color_larger').on("click", function(e) {
		anime.remove(pearlObj);
		var zoomLarger = anime({
			targets: pearlObj,
			scale: function(anim) {
				//	Enlarges the pearls to maximum of 175% size, and minimum of 125%.
				return anime.random(125, 175) / 100;
			}
		});
	});
});