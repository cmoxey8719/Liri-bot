
var fs = require("fs");
var omdb = require("./omdb.js");
var spotify = require("./spotify.js");
var tweets = require("./twitter.js");

var task = process.argv[2];


// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (task) {
  case "my-tweets":
    tweets();
    break;

  case "spotify-this-song":
    spotify();
    break;

  case "movie-this":
    omdb();
    break;

  case "do-what-it-says":
  // should run spotify-this song I want it That Way from a text file
    spotify();
    break;
}


