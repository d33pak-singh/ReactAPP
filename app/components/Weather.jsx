var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading: true
		});
		openWeatherMap.getTemp(location).then(function(temp){
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(err){
			that.setState({
				isLoading: false
			});
			console.log(err);
		});
	},
	render: function(){
		var {isLoading, location, temp} = this.state;

		function renderMessage() {
			if(isLoading){
				return <h5 className="text-center">Fetching Weather...</h5>
			} else if (temp && location){
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		return(
				<div>
					<h3 className="text-center">Get Weather</h3>
					<WeatherForm onSearch={this.handleSearch}/>
					{renderMessage()}
				</div>
			)
	}
});
module.exports = Weather;