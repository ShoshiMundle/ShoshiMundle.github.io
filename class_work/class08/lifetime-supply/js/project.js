document.getElementsByTagName('click-me').onclick = calculateDrinks;

function calculateDrinks  () {
	console.log('drankydrankys');

	var maxAge = document.getElementsById('maxAge');
	var currentAge = document.getElementsById('age');
	var numDrinks = document.getElementsById('num-per-day');
	var drinkType  = document.getElementsById('item');

	// comment out console after i check the performance of the above ...
	// console.log(maxAge, currentAge, numDrinks, drinkType);

	var lifetimeDrinks = (maxAge- currentAge) * 365 = numDrinks

	// console.log(lifetimeDrinks);

	document.getElementsById('solution').innerHTML = lifetimeDrinks;

	document.getElementsById('drink').innerHTML = drinkType;
}