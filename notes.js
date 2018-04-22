const request = require('request');


console.log("notes started...");


var add = (a,b) => {
  return (a+b);
};

var foo = () => {
  console.log("foo");
};

var fetchAddress = () => {
  request('https://www.google.com/', (error, response, body) => {
    console.log(response.statusCode);
  });
  console.log("doing some more work");
};

module.exports = {
  add,
  fetchAddress,
  foo
};


