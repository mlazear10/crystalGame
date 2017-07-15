// GLOBAL VARIABLES
// ====================================

var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

// Scores (curent and target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//Game Count
var gameCount = 0;

// FUNCTIONS
// ====================================


// Helper function for random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
  // Reset the current score
  currentScore = 0;

  // set a new target score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Change the html to update the scores 
  $("#yourScore").text(currentScore);
  $("#targetScore").text(targetScore);

  // set different values to each crystal between 1 and 12
  crystal.blue.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  // Testing console
  console.log("----- ---  - -- - -- - ");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + "| Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
  console.log("---- - -  - -- -- - - - ");
}

var addValues = function(crystal) {
	
	// Change the value of the current score
	currentScore = currentScore + crystal.value;

	$('#yourScore').html(currentScore);
	checkWin();
	//Testing Console
	console.log("YOur score: " + currentScore);
}

// Check if user won or lost and Reset the game
var checkWin = function() {
	if (currentScore > targetScore) {
		alert("You lost");
		console.log("You lost");

		// Add to loss count
		lossCount++;

		// Change the loss count HTML
		$('#lossCount').html(lossCount);

		// Reset the round
		startGame(1);
		gameCounter();
	}

	else if (currentScore == targetScore) {
		alert("Congrats you are victorious");
		console.log("You win");

		// add to win count
		winCount++;

		// Change the wiin count HTML
		$('#winCount').html(winCount);

		//Reset the round
		startGame(1);
		gameCounter();

	}

}

var gameCounter = function() {
	// adds the games played
	gameCount = winCount + lossCount;

	//Sets game counter to the default score
	$('#gameCount').text(gameCount);

	// Check console to see if working
	console.log("Games played: " + gameCount);
}


// MAIN PROCESS (functions area called)
// ====================================
startGame();
gameCounter();

$('#winCount').text(winCount);
$('#lossCount').text(lossCount);

$('#blue').on("click", function() {
	addValues(crystal.blue);
});

$('#green').on("click", function() {
	addValues(crystal.green);
});

$('#red').on("click", function() {
		addValues(crystal.red);
});

$('#yellow').on("click", function() {
		addValues(crystal.yellow);
});


// alert("is working");
//test if it is working initially