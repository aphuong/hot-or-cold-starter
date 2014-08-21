
$(document).ready(function(){
/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);
	});

/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	
	// global variables
  var secretNum
  var guessCount
  
  var newGame = function() {
    secretNum = Math.floor((Math.random() * 100) + 1);
    guessCount = 0;
    $("#count").text(0);
    $("#guessList").empty();
    $("#feedback").text("Make your Guess!");
    document.getElementById("userGuess").disabled = false;
    document.getElementById("guessButton").disabled = false;
  }; 
  	
  newGame();

	$(".new").click(function() {
	 newGame();
	});

	$("form").on("submit", function(event) {
		event.preventDefault();
		var userGuess = $(".text").val();
		var guessNum = +userGuess;
		
		// only want to count and list guesses between 1 -100.
		if (guessNum >= 1 && guessNum <= 100) {
			// guessCount will now increase by 1 each time user enters an input.
    	guessCount = guessCount + 1;
    	$("#count").text(guessCount);
    	// the user's guesses will be listed in #guessList
    	$("#guessList").append("<li>" + guessNum + "</li>");
		};
    
    // empty the input box and hot or cold feedback after each input is submitted. 
    $(".text").val('');
    $("#feedback li").empty();
   
    

    var difference = Math.abs(guessNum - secretNum)
    
    if (guessNum >= 1 && guessNum <= 100) {
  		if (difference >= 50) {
  			$("#feedback").append("<li>Ice Cold</li>");
  				} else if (difference >= 30 && difference < 50) {
  					$("#feedback").append("<li>Cold</li>");
          } else if (difference >= 20 && difference < 30) {
            $("#feedback").append("<li>Warm</li>");
  				} else if (difference >= 10 && difference < 20) {
  					$("#feedback").append("<li>Hot</li>"); 
  				} else if (difference >= 5 && difference < 10) {
  					$("#feedback").append("<li>Very Hot</li>");
  				} else if (difference >= 1 && difference < 5) {
            $("#feedback").append("<li>Flaming Hot</li>");
          } else if (difference == 0) {
  					$("#feedback").append("<li>Correct, You're on FIRE!!!</li>");
  					// disable input and submit button to prevent users from continuing game after winning.
  					document.getElementById("userGuess").disabled = true;
  					document.getElementById("guessButton").disabled = true;
  				}
    } else {
      alert("Please enter a whole number between 1 and 100!");
	    }
	});
});


