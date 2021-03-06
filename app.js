const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('express-flash');
app.use(flash());


app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'somethingcool',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});


