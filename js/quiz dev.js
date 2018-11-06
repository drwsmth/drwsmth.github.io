function quizApplication() {
	var score = 0;

	$('.quiz_module nav_button--validate').click(function() {

		$('.question').each(function() {
			var questionNum = $(this, 'input').length();
			$(this).removeClass('answer_incorrect answer_correct');
			var selectedAnswer = $(this).prop('checked');
			if (selectedAnswer.attr('correct')) {
				$(this).addClass('answer_correct');
				console.log("Correct Answer!");
				$(this).append('<p>Nice Work!</p>');
				score++;
			} else {
				console.log("Incorrect Answer :(");
				$(this).addClass('answer_incorrect');
				$(this).append('<p>Sorry, try again.</p>');
			}
			var scorePercentage = score / questionNum * 100;
			var scoreGreat = 80;
			var scoreGood = 50;

			if (score >= scoreGreat) {
				console.log("Great Score Champ!")
			}
			if (score >= scoreGood && score < scoreGreat) {
				console.log("not bad score champ!!")
			}
			if (score < scoreGood) {
				console.log("Ouch")
			}
			if (score < -1) {
				console.log("Very Ouch")
			} else {
				console.log("Weird")
			}


		});

		// Output score
		$('#score').text(score);


	});

} // end document ready