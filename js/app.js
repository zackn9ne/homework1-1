

$(function() {
    console.log( "ready!" );


	var $list = $('#tweets');

$.ajax ({
	type: 'GET',
	url: 'http://rest.learncode.academy/api/johnbob/friends',
	success: function(payLoad){
		$.each(payLoad, function(i, order) {
			$list.append("<li>" + order.name + " " + order.age"</li>");
		});
	}
})

	});
