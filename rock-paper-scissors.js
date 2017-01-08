var userChoice = prompt("Do you choose rock,paper or scissors?")//  created a variable which will display the string

var computerChoice = Math.random()//created a variable with Math.random() which will choose random number from 0 to 1 including floats
console.log(computerChoice);

if (computerChoice < 0.34) {
	computerChoice = "Rock";
}
else if (computerChoice < 0.67) {
	computerChoice = "paper";
}
else {
	computerChoice = "scissors";
}
// created a conditonal which decides for the computer using the random


var compare = function(userChoice,computerChoice)	{
	if (choice1 == choice2)
		return "this result is a tie";
	
	else if(choice1 === "rock")	{
		
		if(choice2 === "scissors")
			return "rock wins";
		
		else {
			return "paper wins";
		}
	}
};

//created another conditonional which when you choose one of the option it returns another.