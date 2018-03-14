const key = process.env.KEY;
const port = process.env.PORT;

const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

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
  var numberOfUsers = 999;
  res.render("index.hbs", {numberOfUsers}));
}



app.listen(port);
