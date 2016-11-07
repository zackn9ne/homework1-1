console.log("Yo");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000*60*5)

function tweetIt(){

	var r = Math.floor(Math.random()*100);

	var tweet = {
		status: 'test tweet #' + r 
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err,data, response){
		if(err){
			console.log("Yo, change some stuff");
		}else{
		console.log("Nice!");
		}
	}
}


var params = { 
	q: 'Trump', 
	count: 3
};

T.get('search/tweets', params, gotData);


function gotData(err, data, response) {
  // console.log(data.statuses[0].created_at)
  var tweets = data.statuses;
  	console.log(tweets.length);
    for (var i = 0;i < tweets.length; i++){
  	console.log(tweets[i].text);

  }

};

