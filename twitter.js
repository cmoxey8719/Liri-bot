var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'sEXyO3EE33rdKpHdI7bBQwatT',
  consumer_secret: 'XGJF8aEshODUQyCXbsqe4Razp5FScNEH5nHZpIdD67Clm3JUmh',
  access_token_key: '157687772-90ZYtzkjjUBrdLpYtQ2fGRz6eigJpr4I1ouhRXWG',
  access_token_secret: 'i2PXYqhBhF8APX6XmEnxyIgDfdqI2IlvqJwjImQf9Tcm0'
});

module.exports = function(){
	var params = {screen_name: 'Moxeymoron', statuses_count: 20};
	client.get('statuses/user_timeline.json?count=50', params, function(error, tweets, response) {
		if (!error) {
			
			for (var i = 0; i < 20; i++){
				var num = i+1;
				console.log("Recent Tweet #" + num + ": " + tweets[i].text);
			}

		}
	});
}