
var request = require("request");

//takes in any name size and puts '+' in place of spaces
var movie = process.argv.slice(3).join('+');

//if the user doesn't make a choice, show the info for Mr. Nobody
module.exports = function(){
	
	if(movie === ""){
		movie = "mr+nobody";
	}
	var link = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=40e9cece";

	request(link, function(error, response, body) {

		// If the request is successful (i.e. if the response status code is 200)
		if (!error && response.statusCode === 200) {
			console.log("---------------------------");
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year: " + JSON.parse(body).Year);
			console.log("Actors: " + JSON.parse(body).Actors);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("IMDB rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomato rating: " + JSON.parse(body).Ratings[1].Value);
			console.log("Produced in: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
		}	
	});
};
