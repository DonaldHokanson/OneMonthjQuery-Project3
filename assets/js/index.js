var main=function(){
	
	$('#list-items').html(localStorage.getItem('listItems'));

	$('.add-items').submit(function(event){
		event.preventDefault();
		
		var item = $('#todo-list-item').val();
		var easterEgg = "TFK";
		
		if (item) {
			$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>");
			localStorage.setItem('listItems', $('#list-items').html());
			$('#todo-list-item').val("");		
		}

		if (item == easterEgg) {
			$('.easterEgg').css('display', 'block');
		}
	});
};

$(document).ready(main)

$(document).on('change', '.checkbox', function(){
	if ($(this).attr('checked')) {
		$(this).removeAttr('checked');
	}

	else{
		$(this).attr('checked', 'checked');
	}

	$(this).parent().toggleClass('completed');
	localStorage.setItem('listItems', $('#list-items').html());
});

$(document).on('click', '.remove', function(){
	$(this).parent().fadeOut('fast', function(){
		$(this).remove();
		localStorage.setItem('listItems', $('#list-items').html());
	});
});