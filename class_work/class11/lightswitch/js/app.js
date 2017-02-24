$(document).ready(function () {

	var lights = 'on';

	// click function on #lightswitch
	// toggle classess switch-on and switch-off (as shown in CSS)
	// toggle body class lights-off
	// we need to give this a conditional because the lights could be on or off. this is like the temp eg


// I want to do a click funciton on lightswitch
	$('#lightswitch').click(function() {
// consol.log('switch switched')

	if (lights == 'on') {
		console.log('lights on');
		// now we set light so we only use 1 equal sign because we need to tell it to turn off lights
		lights = 'off';
		
	} else
		console.log('lights off');
		lights = 'on';
	}

	})


})
