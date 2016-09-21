//the config stuff for the Twilio account are defined here
var cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 8081;

//set the following to own API keys - these should either be loaded from a file, or from env variables
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID || "account id set here"; //SET ACCOUNT ID
cfg.authToken = process.env.TWILIO_AUTH_TOKEN || "auth token here"; //SET TOKEN
cfg.sendingNumber = process.env.TWILIO_NUMBER || "phone...";  //SET PHONE

// Export configuration object
module.exports = cfg;
