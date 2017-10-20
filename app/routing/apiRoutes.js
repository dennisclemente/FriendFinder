var path = require("path");
var friends = require("../data/friends");
var selectionData = require("../data/selectionData");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/list", function(req, res) {

    var userInput = req.body;
    var userResponses = userInput.scores;
  });

  var friendName = '';
  var friendFace = '';
  var totalDiff = 1200;

  for (var i = 0; i < friends.length; i++) {
    var diff = 0;
    for (var j = 0; j < userResponses.length; j++) {
      diff += Math.abs(friends[i].scores[j] - userResponses[j]);
    }
  }
  if (diff <totalDiff) {
    totalDiff = diff;
    friendName = friends[i].name;
    friendFace = friends[i].photo;
  }
  
  friends.push(userInput); 
  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // app.post("/api/friends", function(req, res) {
  //   // "Server" will respond to requests and let users know if they have a match or not.
  //   // It will do this by sending out the value "true" have a table
  //   if (friends.length < 5) {
  //     friends.push(req.body);
  //     res.json(true);
  //   }
  //   else {
  //     selectionData.push(req.body);
  //     res.json(false);
  //   }
  // });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendName = [];
    friendFace = [];

    res.json(userInput);
  });
};
