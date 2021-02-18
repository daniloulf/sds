/*generate random int*/
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

/*form changes events*/
$(document).change(function() {

	var value = writeSelection();
	
	$('button').attr('disabled', false);
	$('#show').html(value);
	
});

/*form click event*/
$(document).ready(function() {
	
	$('#button').click(function() {
		
		value = writeSelection();
		$('#show').html(value);
		
	});
	
})

/*dices random numbers*/
function dice1w4() {
	var number = getRandomInt(4);
	return number;
}

function dice1w6() {	
	var number = getRandomInt(6);
	return number;
}

function dice1w8() {
	var number = getRandomInt(8);
	return number;
}

function dice1w10() {
	var number = getRandomInt(10);
	return number;
}

function dice1w12() {
	var number = getRandomInt(12);
	return number;
}

function dice1w20() {
	var number = getRandomInt(20);
	return number;
}

function dicepercent() {
	var number = getRandomInt(100);
	return number;	
}

/*generate value*/
function writeSelection() {
	
	var value = $("#dices").val();
		
	switch (value) {
		case 'all':
			value = [
						'<p>1W4: <strong>' + dice1w4() + '</strong></p>', 
						'<p>1W6: <strong>' + dice1w6() + '</strong></p>', 
						'<p>1W8: <strong>' + dice1w8() + '</strong></p>', 
						'<p>1W10: <strong>' + dice1w10() + '</strong></p>', 
						'<p>1W12: <strong>' + dice1w12() + '</strong></p>', 
						'<p>1W20: <strong>' + dice1w20() + '</strong></p>', 
						'<p>Percent: <strong>' + dicepercent() + '</strong></p>'
					];
			break;
		case '4eyes':
			value = dice1w4();
			break;
		case '6eyes':
			value = dice1w6();
			break;
		case '8eyes':
			value = dice1w8();
			break;
		case '10eyes':
			value = dice1w10();
			break;
		case '12eyes':
			value = dice1w12();
			break;
		case '20eyes':
			value = dice1w20();
			break;
		case 'percent':
			value = dicepercent();
			break;
		default:
			value = 'No Eyes selected!';
			break;
	}
	
return value;
	
}
