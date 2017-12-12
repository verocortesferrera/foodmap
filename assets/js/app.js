/*boom*/
$(document).ready(function() {
/*splash*/
	setTimeout(function() {
		$(".content").fadeOut(500);
		},3000);
		setTimeout(function() {
			$(".content2").fadeIn(500);
		});

	$('#sabi2').click(function(){
	$('.italia').show();
	});

});

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
		var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
		});
	var marker = new google.maps.Marker({
	position: uluru,
	map: map
	});
}


