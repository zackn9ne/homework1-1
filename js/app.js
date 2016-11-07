console.log("Yo");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);









var params = { 
	q: 'for', 
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

