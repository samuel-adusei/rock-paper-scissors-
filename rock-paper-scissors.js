var userChoice = prompt("Do you choose rock,paper or scissors?")

var computerChoice = Math.random()
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

var compare = function(choice1 == choice2)	{
	if (choice1 == choice2)
		return "this result is a tie"
};
