"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const line = require("@line/bot-sdk");
const app = express();
const firebaseService = require("./firebase-service");

app.set("port", process.env.PORT || 5000);
// Process application/json
app.use(bodyParser.json());

const client = new line.Client({
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const message = {
  type: "text",
  text: "https://to-do-dev.herokuapp.com/"
};

let _messages = [
  {
    type: "text",
    text: message
  }
];

app.post("/webhook", (req, res) => {
  var text = req.body.events[0].message.text;
  var sender = req.body.events[0].source.userId;
  var replyToken = req.body.events[0].replyToken;
  console.log(text, sender, replyToken);
  console.log(typeof sender, typeof text);
  // firebaseService.getHogwartHouses().then(function(tt) {
  //   _messages[0].text = tt;
  //   console.log(tt);
  //   client
  //     .replyMessage(replyToken, _messages)
  //     .then(() => {
  //       res.sendStatus(200);
  //     })
  //     .catch(err => {
  //       // error handling
  //     });
  // });

  if (text == "edit") {
    client
      .replyMessage(replyToken, message)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        // error handling
      });
  } else {
    var arr_str = text.split(" : ");
    var name = arr_str[0];
    var date = arr_str[1];
    var time = "12:00";
    if (arr_str.length == 3) {
      time = arr_str[2];
    }

    var taskId = new Date().valueOf();
    firebaseService.addTask(taskId, name, date, time);
  }
});

app.get("/", (req, res) => {
  res.redirect(
    "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1638410516&redirect_uri=https://to-do-dev.herokuapp.com/edit&state=12345abcde&scope=openid"
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// Spin up the server
app.listen(app.get("port"), function() {
  console.log("running on port", app.get("port"));
});
