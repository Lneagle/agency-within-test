$(document).ready(function() {
	Vue.component('city-weather', {
		props: ['city'],
		template: '<div class="city">\
						<h2>{{city.name}}</h2>\
						<img class="icon" :src="\'http://openweathermap.org/img/w/\' + city.weather[0].icon + \'.png\'" />\
						<p class="temp">{{city.main.temp}}&deg; F</p>\
						<p>{{city.weather[0].main}}</p>\
					</div>'
	});
	
	new Vue({
		el: '#app',
		data: {
			cities: [],
			cityIndex: -1,
			featuredCity: {}
		},
		created: function() {
			var vm = this;
			var lastRetrieved = parseInt(localStorage.getItem('lastRetrieved'));
			if (lastRetrieved && $.now()-lastRetrieved < 600000) {
				vm.cities = JSON.parse(localStorage.getItem('wdata')).list;
			} else {
				$.getJSON('http://api.openweathermap.org/data/2.5/group?id=5128638,703448,2643743,1816670,3582677&units=imperial&APPID=ca591fc6223148d336e26af601d6697a', function(data) {
					localStorage.setItem('wdata', JSON.stringify(data));
					localStorage.setItem('lastRetrieved', $.now());
				}).done( function() {
					vm.cities = JSON.parse(localStorage.getItem('wdata')).list;
				});
			};
		},
		methods: {
			displayDetails: function(index) {
				this.cityIndex = index;
				this.featuredCity = this.cities[index];
			}
		}
	});
});