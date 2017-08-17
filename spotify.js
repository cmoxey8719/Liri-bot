var Spotify = require('node-spotify-api');

var song = process.argv.slice(3).join(' ');
 
var spotify = new Spotify({
  id: "04d603d8b03c443989887143ba18398f",
  secret: "0da5984e917844d5aad0cd5cf171bea1"
});

module.exports = function(){
  if(song === ""){
    song = "ace of base";
  }

  spotify.search({ type: 'track', query: song, limit:1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: This entry is not valid');
    }
    else{
      for(i = 0; i < 1; i++){
      console.log("-----------------------------");
      console.log("Song: " + data.tracks.items[i].name);  
    	console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
      console.log("Album: " + data.tracks.items[i].album.name);
    	console.log("Spotify preview: " + data.tracks.items[i].external_urls.spotify);
      }
    }
  });
}