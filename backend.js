//Demetris Hoplaros
//Nothing fancy here...

//necessary packages here
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

//configuration file
var config = require('./config');
var twilioClient = require('./twilioClient');

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//the exposed restful method is defined here - all the magic is happening here
app.post('/api/sms-promotion', function(req, res) {
  //set header - this should not be done in a prod environment - so as to avoid CORS header missing warnings
  res.header('Access-Control-Allow-Origin', '*');

  //basic response
  var response = {
    error: null,
    success: false,
  };
  //some sanitization should be performed on the phone in a prod env
  console.log("Received sms request for: ", req.body.phone);

  //check time of the server so as to generate msg
  var currentDate = new Date();
  var msg = "";

  if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
    msg = "Good morning! Your promocode is AM123";
  } else {
    msg = "Hello! Your promocode is PM456";
  }

  //create the twilio request
  twilioClient.sendSms(req.body.phone, msg, function(result) {
    if (result && result.success) {
      response.success = true;
    } else {
      if (result.errorMessage) {
        response.error = result.errorMessage;
      }
    }
    res.json(response);
  });
});

//start listening on port
var server = app.listen(config.port, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Magic SMS app listening at http://%s:%s", host, port)
})
