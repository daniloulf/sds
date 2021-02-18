/*generate random int*/
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

var hasValue = true;
var last = new Array();

/*form changes events*/
$(document).change(function() {

	var value = writeSelection();
	
	last.push(value);
	
	$('#show').html(value);
	$('#last').html(last);
	
	if (hasValue == true) {
		$('button').attr('disabled', false);
	} else {
		$('button').attr('disabled', true);
	}
	
});

/*form click event*/
$(document).ready(function() {
	
	$('#button').click(function() {
		
		value = writeSelection();
		last.push(value);
		$('#show').html(value);
		$('#last').html(last);
		
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
						'4 eyes: <strong>' + dice1w4() + '</strong>\n', 
						'6 eyes: <strong>' + dice1w6() + '</strong>\n', 
						'8 eyes: <strong>' + dice1w8() + '</strong>\n', 
						'10 eyes: <strong>' + dice1w10() + '</strong>\n', 
						'12 eyes: <strong>' + dice1w12() + '</strong>\n', 
						'20 eyes: <strong>' + dice1w20() + '</strong>\n', 
						'Percent: <strong>' + dicepercent() + '</strong>\n'
					];
			break;
		case '4eyes':
			value = '4 eyes: <strong>' + dice1w4() + '</strong>\n' ;
			break;
		case '6eyes':
			value = '6 eyes: <strong>' + dice1w6() + '</strong>\n';
			break;
		case '8eyes':
			value = '8 eyes: <strong>' + dice1w8() + '</strong>\n';
			break;
		case '10eyes':
			value = '10 eyes: <strong>' + dice1w10() + '</strong>\n';
			break;
		case '12eyes':
			value = '12 eyes: <strong>' + dice1w12() + '</strong>\n';
			break;
		case '20eyes':
			value = '20 eyes: <strong>' + dice1w20() + '</strong>\n';
			break;
		case 'percent':
			value = 'Percent: <strong>' + dicepercent() + '</strong>\n';
			break;
		default:
			hasValue = false;
			value = hasValue;
			break;
	}
	
return value;
	
}
