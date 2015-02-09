var SlackAutoInviter = require('slack-typeform-inviter');

var inviter = new SlackAutoInviter({
    typeformUID: process.env.TYPEFORM_UID,
    typeformKey: process.env.TYPEFORM_KEY,
    typeformEmailField: process.env.TYPEFORM_EMAIL,
    typeformFirstNameField: process.env.TYPEFORM_FIRST_NAME,
    typeformLastNameField: process.env.TYPEFORM_LAST_NAME,

    slackName: process.env.SLACK_NAME,
    slackToken: process.env.SLACK_TOKEN,

    dataFile: __dirname + '/data.json'
});

var minutes = 1, the_interval = minutes * 60 * 1000;

var express = require('express')
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  // running this at an interval
  setInterval(function() {

    inviter.inviteAll().then(function () {
      console.log('done');
    });

  },the_interval);

})

