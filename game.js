// random value generated
	var y = Math.floor(Math.random() * 100 + 1);

	// counting the number of guesses
	// made for correct Guess
	var guess = 1;

	document.getElementById("submitguess").onclick = function(){

		// number guessed by user	
		var x = document.getElementById("guessField").value;

		if(x == y)
		{	
			alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
				+ guess + " GUESSES!! ");
		}
		else if(x > y) /* if guessed number is greater than actual number*/
		{	
			guess++;
			alert("Too high. Try a smaller number.");
		}
		else
		{
			guess++;
			alert("Too low. Try a greater number.")
		}
	}