var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

//send sms method
module.exports.sendSms = function(to, message, callback) {
  client.messages.create({
    body: message,
    to: to,
    from: config.sendingNumber
  }, function(err, data) {
    if (err) {
      callback({
        success: false,
        data: data
      })
    } else {
      callback({
        success: true,
        data: data
      });
    }
  });
};
