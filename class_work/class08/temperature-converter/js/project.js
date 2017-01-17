// Wrapper

#wrapper {
	width: 1000px;
	height: 1000px;
	margin: 0 auto;
	padding: 50;
	// where is the background image link?
	background-image: url("");

// Add buttons
var addRedbtn = document.querySelector('#addred');

addRedbtn.oncllick = addRed;

button.onmouseover = overFunction;
button.onmouseout = outFunction;

function addRed() {
	var resultTxt = document.querySelector('#result').innerHTML;
	var resultColor = parseInt(resultTxt);
	console.log(resultColor);

	resultTxt = document.querySelector('#result').innerHTML = resultColor;
}

var addGreenBtn = document.querySelector('#addGreen');

addGreenBtn.oncllick = addGreen;

function addGreen() {
	var resultTxt = document.querySelector('#result').innerHTML;
	var resultColor =. parseInt(resultTxt);
	console.log(resultColor);

	resultTxt = document.querySelector('#result').innerHTML = resultColor;
}

// Add Radio Buttons

var addRedbtn = document.getElementById("myRadio");