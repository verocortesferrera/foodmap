/*boom*/
$(document).ready(function() {
/*splash*/
	setTimeout(function() {
		$(".content").fadeOut(500);
		},3000);
		setTimeout(function() {
			$(".content2").fadeIn(500);
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

function mostrar(id) {
	var opciones = $("#status").val();
	$('#resta').val('');
		if (id == "italia") {
			$("#resta").hide();
			$("#italia").show();
			$("#chile").hide();
			$("#china").hide();
			$("#mexico").hide();
		}

		if (id == "chile") {
			$("#resta").hide();
			$("#italia").hide();
			$("#chile").show();
			$("#china").hide();
			$("#mexico").hide();
		}

		if (id == "china"){
			$("#resta").hide();
			$("#italia").hide();
			$("#chile").hide();
			$("#china").show();
			$("#mexico").hide();
		}

		if (id == "mexico"){
			$("#resta").hide();
			$("#italia").hide();
			$("#chile").hide();
			$("#china").hide();
			$("#mexico").show();
		}
};
