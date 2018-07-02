$(document).ready(function() {
	var lastRetrieved = parseInt(localStorage.getItem('lastRetrieved'));
	var weatherData;
	if (lastRetrieved && $.now()-lastRetrieved < 600000) {
		displayWeather();
	} else {
		$.getJSON('http://api.openweathermap.org/data/2.5/group?id=5128638,703448,2643743,1816670,3582677&units=imperial&APPID=ca591fc6223148d336e26af601d6697a', function(data) {
			localStorage.setItem('wdata', JSON.stringify(data));
			localStorage.setItem('lastRetrieved', $.now());
		}).done( function() {
			displayWeather();
		});
	};
	
	function displayWeather() {
		$('#city-list').html('');
		var wdata = JSON.parse(localStorage.getItem('wdata'));
		var templateScript = Handlebars.templates['city-overview'](wdata);
		$('#city-list').append(templateScript);
		$('.city').on('click', function() {displayDetails(this.dataset.index)});
	}
	
	function displayDetails(index) {
		$('#city-details').slideUp(400, function(){
			$(this).html('');
			var wdata = JSON.parse(localStorage.getItem('wdata'));
			var templateScript = Handlebars.templates['city-description'](wdata.list[index]);
			$(this).append(templateScript).slideDown();
		});
	}
});