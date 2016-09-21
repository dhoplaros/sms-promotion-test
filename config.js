//the config stuff for the Twilio account are defined here
var cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 8081;

//set the following to own API keys - these should either be loaded from a file, or from env variables
cfg.accountSid = process.env.TWILIO_ACCOUNT_SID || "AC262d22ca851753c3257a89a5faa2eb4c";
cfg.authToken = process.env.TWILIO_AUTH_TOKEN || "185856e67ec6b92e9495b1a0f0d964c4";
cfg.sendingNumber = process.env.TWILIO_NUMBER || "+17194284440";

// Export configuration object
module.exports = cfg;
