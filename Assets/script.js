var day = moment().format('dddd');
var date = moment().format('MMMM Do, YYYY');
var time = moment().format('hh:mm a');
var currentHour = moment().format('H');

// set the hour
var hour = [
	'09:00 am',
	'10:00 am',
	'11:00 am',
	'12:00 pm',
	'01:00 pm',
	'02:00 pm',
	'03:00 pm',
	'04:00 pm',
	'05:00 pm'
];

// Set date and time jumbotron
$('#currentDay').text(day);
$('#currentDate').text(date);
$('#currentTime').text(time);
$('#currentHour').text(hour);

for (var i = 0; i < hour.length; i++) {
	// arrValue = array[i];
	const hourBlock = $('<section>');
	const hour24 = i + 10;
	const p = $('<p>');
	hourBlock.addClass('hour row time-block');
	hourBlock.attr('data-hour', hour[i]);
	p.text(hour[i]).addClass('col-md-2 col-sm-1');

	// change the color for the time block as present, past and future.

	if (hour24 < parseInt(currentHour)) {
		hourBlock.addClass('past');
	} else if (hour24 > parseInt(currentHour)) {
		hourBlock.addClass('future');
	} else {
		hourBlock.addClass('present');
	}

	let textArea = $('<textarea>').addClass('col-md-9');

	let saveBtn = $('<div>').addClass('col-md-1 saveBtn').text('Save');

	hourBlock.append(p, textArea, saveBtn);
	$('.container').append(hourBlock);
	let task = localStorage.getItem(hour[i]);
	textArea.val(task);
}
// function save button

$('.saveBtn').on('click', function(event) {
	event.preventDefault();
	let timer = $(this).siblings('textarea').val();
	let key = $(this).siblings('p').text();
	localStorage.setItem(key, timer);
});
