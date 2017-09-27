$(document).ready(function() {

	function startGame() {
		startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
		$(".quiz-container").html(startScreen);
	}

	startScreen();

	$("body").on("click", ".start-button", function(event) {
		clickSound.play();
		selectedAnswer = $(this).text();
		if(selectedAnswer === correctAnswer[questionCounter]) {

			clearInterval(theTimer);
			logWin();
		} else {
			clearInterval(theTimer);
			generateLoss();
		}
	}


);