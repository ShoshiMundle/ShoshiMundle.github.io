// Shoshi's comments: the below returns the element that has the ID which is 'color-button' and runs the function 'changeColor' when clicked.
document.getElementById('color-button').onclick = changeColor;

// Shoshi's comments: the below is a declared function and it is telling the code to get 
// element- which is directly after the variable - by the ID in quotes. the IDs are based on the input IDs in the HTML
// You are not only getting the element ... you're getting the VALUE of the element. 
// Then you're telling the JS to MAKE SURE THIS VALUE IS A NUMBER 
function changeColor() {

	var redBtn = document.getElementById('red').value;
	redBtn = parseInt(redBtn);
	console.log(redBtn);

	var greenBtn = document.getElementById('green').value;
	greenBtn = parseInt(greenBtn);
    console.log(greenBtn);

	var blueBtn = document.getElementById('blue').value;
	blueBtn = parseInt(blueBtn);
	console.log(blueBtn);


// Shoshi's comments: this is concatenation. the variable here is colorStr and i am telling the JS to write:
//  "rgb( [the value of redBtn], [the value of greenBtn], [the value of blueBtn])"
// Literally the above on the page
var colorStr = 'rgb(' + redBtn + ',' + greenBtn + ',' + blueBtn + ')';
console.log(colorStr)

// Shoshi's comments: getting Element named colorful-text which is in the HTML 
// and WRITING the literal sentence from colorStr
document.getElementById('colorful-text').innerHTML = colorStr;


// Shoshi' comments: here i am affecting the id called wrapper and I am getting the ID
// called wrapper and changing the background color to the colors listed above 
// in the variable called colorStr.
var wrapper = document.getElementById('wrapper');
wrapper.style.background = colorStr;
}



// 1. Use document.getElementById() and assign the .onclick event to #color-button
// 2. Write a function, named changeColor, that is called when #color-button is clicked
// 3. Inside of the function changeColor, use variables to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;



// 4. Create a variable, named colorStr, which concatenates the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be: rgb(100, 150, 200)
// 5. Use .innerHTML to change the text inside of #colorful-text to colorStr
// 6. Use .style.background to change the background of #wrapper to colorStr
