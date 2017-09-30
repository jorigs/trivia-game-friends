// Trivia Questions & Answers

const myQuestions = [
    {
      question: "What item of clothing did both Ross and his date wear out to dinner?",
      answers: {
        a: "A Belt",
        b: "A Jacket",
        c: "A Shirt"
      },
      correctAnswer: "c"
    },
    {
      question: "What did Joey buy Chandler as a token of their friendship, which Chandler hated?",
      answers: {
        a: "A Duck",
        b: "A Sweater",
        c: "A Bracelet"
      },
      correctAnswer: "c"
    },
    {
      question: "Why did Joey carry a murse (a man purse)?",
      answers: {
        a: "For an Acting Audition",
        b: "To Impress a Girl",
        c: "To annoy Chandler",
      },
      correctAnswer: "a"
    },
    {
      question: "In what order do the characters appear in the opening credits?",
      answers: {
        a: "Monica, Rachel, Phoebe, Chandler, Joey, Ross",
        b: "Rachel, Monica, Phoebe, Joey, Chandler, Ross",
        c: "Ross, Joey, Monica, Phoebe, Rachel, Chandler",
      },
      correctAnswer: "b"
    },
    {
      question: "What did the duck eat that made him sick?",
      answers: {
        a: "Nutter Butter",
        b: "An Engagement Ring",
        c: "Rachel's Face Cream",
      },
      correctAnswer: "c"
    },
  ]


// variables
  var totalTime = 60;
  var timer;
  var correct = 0;
  var incorrect;
  var number = 0;
  var answers = [];

$(document).ready(function() {

	$("#gamebtn").on("click", function() {
		$("#gamebtn").remove();
		$("#game").removeClass("text-center");
		countDown = setInterval(questionTimer, 1000);
		questions();
	})

	function questionTimer() {
		time--;

		if (time !== 0) {
			$("#time-left").text("<p>" + time + "Seconds Left</p>");
			// console.log(questionTimer);
		} else {
			$("#time-left").text("<p>Time's Up!</p>");
			console.log("End");
			showResults();
			clearInterval(timer);
		}
	}

	}

	startScreen();


	$("body").on("click", ".start-button", function(event) {
		event.preventDefault();
		clickSound.play();
		generateHTML();

		timerWrapper();
});


	$("body").on("click", ".answer", function(event) {
		clickSound.play();
		selectedAnswer = $(this).text();
		if(selectedAnswer === correctAnswer[questionCounter]) {

			clearInterval(theTimer);
			logWin();
		} else {
			clearInterval(theTimer);
			generateLoss();
		}

});

	$("body").on("click", ".reset-button", function(event) {
		clickSound.play();
		resetGame();

	}
});

}); 

function timeoutLoss() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {

}


















