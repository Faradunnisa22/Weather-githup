

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cd183c07e1msh25391568ed09e47p1eea09jsn52713df4ed59',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			cloud_pct.innerHTML = response.cloud_pct
			temp2.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees

			// Get current date and time
			var now = new Date();
			var datetime = now.toLocaleString();

			// Insert date and time into HTML
			document.getElementById("datetime").innerHTML = datetime;

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("London")