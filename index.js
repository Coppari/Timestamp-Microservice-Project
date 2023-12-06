//My first project

// init project
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const InvalidDate = (date) => date.toUTCString() === "Invalid Date"

app.get("/api/:date",function(req,res){
  let date = new Date(req.params.date)
  
  if (InvalidDate(date)){
    date = new Date(+req.params.date)
  }

  if(InvalidDate(date)){
    res.json({ error: "Invalid Date"})
    return;
  }

  
  res.json({
    unix : date.getTime(),
    utc : date.toUTCString()
  })
})
app.get("/api",(req, res) => {
  res.json({ unix : new Date.getTime(), utc : new date.toUTCString()})
})

// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + 3000);
});
