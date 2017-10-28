//dependencies
var path = require("path");

var friends = require("../data/friends");
 
//exporting api routes
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends.friends);
    console.log(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var friendSeeker = req.body;
    var friendFriends = friendSeeker.scores;
  });
    var seekerName = '';
    var seekerFace = '';
    var totalDiff = 1200;

console.log(friends);

  for (var i = 0; i < friends.length -1; i++) {
    var diff = 0;
    console.log(friends[i].scores);
    
    for (var j = 0; j < friends.length; j++) {
       console.log(i);
      console.log(j);

      diff += Math.abs(friends[i].scores[j] - friends[j]);
    }
  }
  if (diff <totalDiff) {
    totalDiff = diff;
    seekerName = friends[i].name;
    seekerFace = friends[i].photo;
  }
}  
  friends.push(friends); 
