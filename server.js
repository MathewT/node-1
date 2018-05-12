'use strict';
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello world\n\n`);
});

let user = os.userInfo();
app.listen(PORT, HOST);

// notes.fetchAddress("https://www.google.com/", (error, statusCode) => {
//   console.log(`fetchAddress callback : ${statusCode}`);
// });

notes.asyncWork("foo")
  .then((res) => {
    console.log("Success!!", res);
  }, (errorMsg) => {
    console.log("Error: ", errorMsg);
  });

// console.log(`Running on http://${HOST}:${PORT} as user ${user.username}`);

// fs.appendFile('file.txt', "hello nodejs data.", (err) => {
//   if (err) {
//     console.error(`an error happened.`);
//   } else {
//     console.log('success');
//   }
// });
