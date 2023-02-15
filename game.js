// picks a random number
	var y = Math.floor(Math.random() * 100 + 1);

	//this will determine the number of guesses
	var guess = 1;

	document.getElementById("submitguess").onclick = function(){

		// number guessed by user	
		var x = document.getElementById("guessField").value;

		if(x == y)
		{	
			alert("You did it in"	+ guess + " guesses!! ");
		}
		else if(x > y) /* if guessed number is too high*/
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