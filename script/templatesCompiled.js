(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['city-description'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<h2>"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n<div class=\"weather-details\">\r\n	<div>\r\n		<img class=\"icon\" src=\"http://openweathermap.org/img/w/"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.weather : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.icon : stack1), depth0))
    + ".png\" />\r\n		<p class=\"temp\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.temp : stack1), depth0))
    + "&deg; F</p>\r\n		<p class=\"desc\">"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.weather : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.description : stack1), depth0))
    + "</p>\r\n	</div>\r\n	<div>\r\n		<h3>Humidity</h3>\r\n		<p>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.humidity : stack1), depth0))
    + "%</p>\r\n	</div>\r\n	<div>\r\n		<h3>Wind Speed</h3>\r\n		<p>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.wind : depth0)) != null ? stack1.speed : stack1), depth0))
    + "mph</p>\r\n	</div>\r\n	<div>\r\n		<h3>Clouds</h3>\r\n		<p>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.clouds : depth0)) != null ? stack1.all : stack1), depth0))
    + "%</p>\r\n	</div>\r\n</div>";
},"useData":true});
templates['city-overview'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"city\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n	<h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<img class=\"icon\" src=\"http://openweathermap.org/img/w/"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.weather : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.icon : stack1), depth0))
    + ".png\" />\r\n	<p class=\"temp\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.main : depth0)) != null ? stack1.temp : stack1), depth0))
    + "&deg; F</p>\r\n	<p>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.weather : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.main : stack1), depth0))
    + "</p>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();