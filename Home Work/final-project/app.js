// on .click, attach an anoymous function

$ ('#clickme').click(function(){
	var newItem = $('#Item').val();

	appendItem(newItem);

	$('#item').val('');

})

function appendItem(newItem) {
	var newItem = '<li>' + newItem + '</li>';
	$('#list').append(newItem);
}