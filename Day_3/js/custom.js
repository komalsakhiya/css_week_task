$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});



// $('ul.nav li.dropdown').hover(function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
// });

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}




$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('.search_button').click(function(){
		var input_value = document.getElementById("search").value;
		if(input_value.length > 0){
			$("body").append( $(
				`<div class="alert alert-success alert-dismissible fade in">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				You are Search Somthing....
				</div>`
				));
		}else{
			$("body").append( $(
				`<div class="alert alert-danger alert-dismissible fade in">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
				Enter Something To Search....
				</div>`
				));
		}
	});
});


$(document).ready(function(){
	

	$('.tab-pane').mouseenter(function () {
		var demo_height = $(this).find('.img_box').height();
		var image_height = $(this).find('.img_container > img').height() - demo_height;
		if (image_height > 0) {
			$(this).find('.img_container').css('top', -(image_height));
		} else {
			$(this).find('.img_container').css('top', 0);
		}
	});
	$('.tab-pane').mouseleave(function () {
		$('.img_container').css('top', 0);
	});  
});