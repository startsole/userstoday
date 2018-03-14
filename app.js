const port = process.env.PORT;
const parseAppID = process.env.APPID; //define this locally

const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const request = require('request');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


var hbs = require('express-hbs');
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//this is so we can accept POST requests
app.use(require("body-parser").urlencoded({extended: false}));

//main route & view set up with publishable key
app.get("/", (req, res) => {
  var numberOfUsers = 666;


  //set date to today
  var today = new Date();
  today.setHours(-4); //set it to match our spreadsheet
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  today.toISOString();
  console.log(today.toISOString());

  //do the query
  var options = {
    url: 'https://api.startsole.net/sole//classes/UserPub?where={"createdAt":{"$gte":{"__type":"Date","iso":"' + today.toISOString() + '"}}}',
    headers: {
      'User-Agent': 'request',
      'X-Parse-Application-Id': parseAppID
    }
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      //set numberOfUsers = count of array returned from query
      numberOfUsers = info.results.length;
      console.log('today is: ', today.toISOString());
      console.log('Number of users today: ', numberOfUsers);

      //make a webpage with that number
      res.render("index.hbs", {numberOfUsers});
    }
  }

  request(options, callback);

});



app.listen(port);
