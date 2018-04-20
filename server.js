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
  res.send('Hello world\n\n');
});

let user = os.userInfo();
app.listen(PORT, HOST);

// console.log(`hello world! 4/19/2018`);
// console.log(`Running on http://${HOST}:${PORT} as user ${user.username}`);
// console.log(_.isString('abc'));
// console.log(_.isString([4,22,5]));

// fs.appendFile('file.txt', "hello nodejs data.", (err) => {
//   if (err) {
//     console.error(`an error happened.`);
//   } else {
//     console.log('success');
//   }
// });
