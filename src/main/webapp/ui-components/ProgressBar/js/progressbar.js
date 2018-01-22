$(document).ready(function() {
	var progValue = 10;
	$('#progressbar').progressbar({
       	'value': 10
    });
	
	$('#btnProgress').click(function() {
		progValue = $('#progressbar').progressbar('value');
		progValue += 10;
		$('#progressbar').progressbar({
       		'value': progValue
    	});
    });
});
    